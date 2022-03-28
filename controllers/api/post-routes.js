// connect express router to server
const router = require("express").Router();

// link Sequelize database
const sequelize = require("../../config/connection");
// require other Models
const { User, Post, Comment } = require("../../models");
// Authorization Helper
const withAuth = require("../../utils/auth");

// Get all posts
router.get("/", (req, res) => {
  Post.findAll({
    attributes: ["id", "post_text", "title", "created_at"],
    // set posts order from most recent to least
    order: [["created_at", "DESC"]],
    // including the post creator's user name from the User table , also all comments from the Comment table
    include: [
      {
        model: User,
        attributes: ["username"],
      },
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
    ],
  })
    // return posts
    .then((dbPostData) => res.json(dbPostData))
    // if error, return error
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET get a single post by post's id
router.get("/:id", (req, res) => {
  Post.findOne({
    where: {
      // get id by req
      id: req.params.id,
    },
    // configuration:
    attributes: ["id", "post_text", "title", "created_at"],
    // including the post creator's user name from the User table , also comment from the Comment table
    include: [
      {
        model: User,
        attributes: ["username"],
      },
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
    ],
  })
    .then((dbPostData) => {
      // if no such post id, return an error
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      // if error , return error
      console.log(err);
      res.status(500).json(err);
    });
});

// create a new post
router.post("/", withAuth, (req, res) => {
  // expects object of the form {title: 'Some Post Title ', post_text: 'Some Post text body', user_id: 1}
  Post.create({
    title: req.body.title,
    post_text: req.body.post_text,
    user_id: req.session.user_id,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT api/posts/1-- update a post's title or text
router.put("/:id", withAuth, (req, res) => {
  Post.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete a post
router.delete("/:id", withAuth, (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
