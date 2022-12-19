const express = require('express');

const router = express.Router();

// landingPage
const landingPageController = require('../controllers/landpage_controller');

// user routes link
router.use('/user', require('./user'));

router.get('/', landingPageController.landingPage);

module.exports = router;