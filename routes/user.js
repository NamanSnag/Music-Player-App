const express = require('express');

const router = express.Router();


const userController = require('../controllers/users_controller'); 

// sign up page route
router.get('/sign-up', userController.signUp);

// sign in page route
router.get('/sign-in', userController.signIn);

// create user 
router.post('/create', userController.create);

// user session
router.post('/session', userController.userSession);

module.exports = router;