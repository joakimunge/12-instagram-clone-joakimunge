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

router.use(bodyParser.urlencoded({ extended: true }));

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


router.get('/all', VerifyToken, function(req, res) {
  Post.find({}, null, { sort: '-date' })
    .populate('author', 'username avatar')
    .exec(function(err, posts) {
      if (err) return res.status(500).send({ error: err.message });

      return res.status(200).send(posts)
    })
})

function fileIsAllowed(file) {
  let fileType = 'image';
  console.log(file)
  var fileTypes = /jpeg|jpg|png|mp4|wmv|avi|mkv|mov|HEVC|HEIF|MOV|quicktime/;
  var vidTypes = /mp4|wmv|avi|mkv|mov|HEVC|MOV|quicktime/;
  var filetypeAllowed = fileTypes.test(file.mimetype);
  if (vidTypes.test(file.mimetype)) {
    fileType = 'video';
  }

  return {
    type: fileType,
    allowed: filetypeAllowed
  };
}

function uploadFile(file, filetype) {

  return new Promise(function(resolve, reject) {
    if (process.env.NODE_ENV === 'production') {

      cloudinary.config({
        cloud_name: process.env.CLOUDNAME,
        api_key: process.env.CLOUD_API_KEY,
        api_secret: process.env.CLOUD_API_SECRET
      });

      console.log('Uploading file: ' + file.path)
      cloudinary.v2.uploader.upload(file.path, { resource_type: "auto", width: 640 }, function(err, result) {
        if (err) return reject(err)

        return resolve(result.secure_url)
      })
    } else {
      return resolve('/api/static/' + file.filename)
    }
  });

}

router.post('/', VerifyToken, upload.single('mediapost'), async function(req, res) {
    let fileType = fileIsAllowed(req.file)
    console.log(fileType)
    if (!fileType.allowed) {
      return res.status(406).send({error: 'Filetype not allowed.'})
    }

    let filePath = await uploadFile(req.file, fileType.type);
    if (!filePath) {
      return res.status(500).send({error: filePath})
    }
    User.findById(req.userId)
      .then(user => {
        Post.create({
          image: filePath,
          description: req.body.description,
          author: req.userId,
          author_id: req.userId,
          type: fileType.type
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