const express = require('express');
const { getAllPosts } = require('../controllers/postController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

// @route   GET /api/posts
// @desc    Get all posts
// @access  Public
router.get('/', getAllPosts);

module.exports = router;
