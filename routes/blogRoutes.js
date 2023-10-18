const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.get('/create', blogController.blog_create_get  )
  
  //blog routes
  router.get('/', blogController.blog_index);
  
  router.post('/', blogController.blog_create_post);
  
  router.get('/:identifier', blogController.blog_details);
  
  router.delete('/:identifier', blogController.blog_delete);

module.exports = router;
  