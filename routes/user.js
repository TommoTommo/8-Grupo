const { request } = require('express');
var express = require('express');
var router = express.Router();



const userController = require("../Controllers/userController") 
/* GET users listing. */
router.get('/register', userController.register);

router.get('/profile', userController.profile);


router.get('/edit', userController.profileedit);

router.get('/profile/login', userController.profilelogin);

module.exports = router;
