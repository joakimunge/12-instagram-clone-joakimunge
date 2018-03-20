var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Comment = require('../models/Comment');
var Post = require('../models/Post');
var User = require('../models/User');
var VerifyToken = require('../middleware/VerifyToken');

router.use(bodyParser.urlencoded({
  extended: true
}));
router.use(bodyParser.json());

router.post('/', VerifyToken, function(req, res) {

  User.findById(req.userId, function(error, user) {
    if (error) return res.status(500).send({auth: true, error: error.message});
  }).then(function(user) {
    Comment.create({
      body: req.body.body,
      author: user.username,
      author_id: user._id
    }, function(error, comment) {

      if (error) return res.status(500).send({auth: true, error: error.message})

      Post.findByIdAndUpdate(req.body.postId, {$push: { comments: comment }}, { new: true }, function(error, post) {
        if (error) return res.status(500).send({auth: true, error: error.message})
        
        return res.status(200).send({ auth: true, post: post });
      })
    });
  })
})

router.get('/:id', function(req, res) {
  Comment.findById(req.params.id, function(error, comment) {
    if (error) {
      return res.status(500).send("An error occurred while getting comment info. Status code 500: Internal server error")
    } else {
      return res.status(200).send(comment);
    }
  })
})

router.delete('/:id', function(req, res) {
  Comment.findByIdAndRemove(req.params.id, function(error, comment) {
    if (error) {
      return res.status(500).send("An error occurred while trying to remove comment. Status code 500: Internal server error")
    } else {
      return res.status(200).send("Comment " + comment.name + " was successfully deleted.");
    }
  })
})

module.exports = router;