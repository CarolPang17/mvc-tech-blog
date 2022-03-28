// connect router to server
const router = require('express').Router();

// connect User Routes
const userRoutes = require('./user-routes');
// connect Post Routes
const postRoutes = require('./post-routes');
// connect Comment Routes
const commentRoutes = require('./comment-routes');

// set API routes use
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

// Export this page
module.exports = router;