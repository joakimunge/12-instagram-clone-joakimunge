var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Post = require('../models/Post');
var User = require('../models/User');
var config = require('../config');
var cloudinary = require('cloudinary');
var VerifyToken = require('../middleware/VerifyToken');
var resizeFile = require('../middleware/FileResize');
require('dotenv').config();

//Multer storage
var multer = require('multer');
const crypto = require('crypto');
var mime = require('mime');

var storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, './uploads')
  },
  filename: function(req, file, callback) {
    crypto.pseudoRandomBytes(16, function(error, raw) {
      callback(null, raw.toString('hex') + Date.now() + '.' + mime.getExtension(file.mimetype));
    })
  }
})

var upload = multer({ storage: storage })

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/all', VerifyToken, function(req, res) {
  Post.find({}, null, { sort: '-date' })
    .populate('author', 'username avatar')
    .exec(function(err, posts) {
      if (err) return res.status(500).send({ error: err.message });

      return res.status(200).send(posts)
    })
})

function uploadFile(file) {

  return new Promise(function(resolve, reject) {
    if (process.env.NODE_ENV === 'production') {

      cloudinary.config({
        cloud_name: process.env.CLOUDNAME,
        api_key: process.env.CLOUD_API_KEY,
        api_secret: process.env.CLOUD_API_SECRET
      });

      cloudinary.v2.uploader.upload(file.path, { width: 640 }, function(err, result) {
        if (err) reject(err)

        resolve(result.secure_url)
      })
    } else {
      resolve('/api/static/' + file.filename)
    }
  });

}

router.post('/', VerifyToken, upload.single('mediapost'), async function(req, res) {
    let filePath = await uploadFile(req.file);
    if (!filePath) {
      return res.status(500).send({error: filePath})
    }
    User.findById(req.userId)
      .then(user => {
        Post.create({
          image: filePath,
          description: req.body.description,
          author: req.userId,
          author_id: req.userId
        }).
        then(post => {
            User.findByIdAndUpdate(req.userId, { $push: { posts: post._id } }, function(error, user) {
              if (error) {
                return res.status(500).send("Could not update user posts array")
              }

              return res.status(200).send({ auth: true, user: user, post: post });
            })
          })
          .catch(error => {
            console.log(error)
            return res.status(500).send({ message: error.message })
          })
      })
})

router.get('/:id', function(req, res) {
  Post.findById(req.params.id, function(error, post) {
    if (error) {
      return res.status(500).send("Could not get post")
    } else {
      return res.status(200).send(post);
    }
  })
})

router.delete('/:id', VerifyToken, function(req, res) {
  // Check if userId is same as Post.Author. Then delete
  //Otherwise return Unauthorized
  Post.findByIdAndRemove(req.params.id, function(error, post) {
    if (error) {
      return res.status(500).send("Could not delete post")
    } else {
      return res.status(200).send("post " + post.name + " was successfully deleted.");
    }
  })
})

router.put('/:id', VerifyToken, function(req, res) {
  // Check if userId is same as Post.Author. Then update
  //Otherwise return Unauthorized
  //For likes and comments this should not apply
  Post.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(error, post) {
    if (error) {
      return res.status(500).send("Could not update post")
    } else {
      return res.status(200).send("post " + post.name + "was successfully updated. New post info: ", post);
    }
  })
})

module.exports = router;