
var express = require('express');
var router = express.Router();



const userController = require("../Controllers/userController") 
/* GET users listing. */
//ruta post de register

router.get('/profile/:id', userController.profile);

router.get('/profile/edit/:id', userController.profileEdit);
router.post('/profile/edit/:id', userController.profileEditSend)

router.get('/login', userController.formLogin);
router.post('/login', userController.loginPost); 


router.get('/register', userController.formRegister);
router.post('/register', userController.registerPost); 

router.post('/logout', userController.logout);

module.exports = router;
