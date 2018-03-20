var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Like = require('../models/Like');
var Post = require('../models/Post');
var User = require('../models/User');
var VerifyToken = require('../middleware/VerifyToken');

router.use(bodyParser.urlencoded({
  extended: false
}));
router.use(bodyParser.json());

router.post('/', VerifyToken, function(req, res) {
  Post.findByIdAndUpdate(req.body.postId, req.userId, { new: true }, function(error, post) {
    if (error) return res.status(500).send({ auth: true, error: error.message });

    // if (!post) return res.status(500).send({error: 'Something went wrong'})

    var userHasLiked = post.likes.indexOf(req.userId)

    if (userHasLiked === -1) {
      post.likes.push(req.userId)
    } else {
      post.likes.splice(userHasLiked, 1)
    }

    post.save();
  }).then(function(post) {
    User.findByIdAndUpdate(req.userId, { new: true }, function(error, user) {
      if (error) return res.status(500).send({ auth: true, error: error.message });

      // if (!user) return res.status(500).send({error: 'Something went wrong'})

      var userHasLiked = user.likes.indexOf(req.body.postId)

      if (userHasLiked === -1) {
        user.likes.push(req.body.postId)

      } else {
        user.likes.splice(userHasLiked, 1)
      }

      user.save();
      return res.status(200).send({ auth: true, post: post, user: user });
    })
  })
  .catch(function(error) {
    console.log(error);
  })
})

router.get('/:id', function(req, res) {
  Like.findById(req.params.id, function(error, like) {
    if (error) {
      return res.status(500).send("An error occurred while getting like info. Status code 500: Internal server error")
    }
    return res.status(200).send(like);
  })
})

module.exports = router;