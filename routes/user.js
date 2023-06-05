const { request } = require('express');
var express = require('express');
var router = express.Router();



const userController = require("../Controllers/userController") 
/* GET users listing. */
//ruta post de register

router.get('/profile', userController.profile);

//router.get('/edit', userController.profileedit);

router.get('/login', userController.formLogin);

router.get('/register', userController.formRegister);

module.exports = router;
