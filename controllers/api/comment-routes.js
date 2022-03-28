// connect express router to server
const router = require('express').Router();

// require Comment Models
const { Comment } = require('../../models');
// Authorization Helper
const withAuth = require('../../utils/auth');


// Get all comments for the selected post
router.get('/', (req, res) => {
    Comment.findAll()
      // return comments data
      .then(dbCommentData => res.json(dbCommentData))
      // if error, return error
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// Post new comment
router.post('/', withAuth, (req, res) => {
  // check if the session exists before create comment
  if (req.session) {
    Comment.create({
      comment_text: req.body.comment_text,
      post_id: req.body.post_id,
      user_id: req.session.user_id
    })
      .then(dbCommentData => res.json(dbCommentData))
      .catch(err => {
        //if error , return error
        console.log(err);
        res.status(400).json(err);
      });
  }
});

// Delete a comment
router.delete('/:id', withAuth, (req, res) => {
    Comment.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(dbCommentData => {
          if (!dbCommentData) {
            res.status(404).json({ message: 'No comment found with this id' });
            return;
          }
          res.json(dbCommentData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    });

module.exports = router;