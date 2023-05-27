//hola
var express = require('express');
var router = express.Router();
/* GET home page. */


router.get('/', function(req, res, next) {
    res.render('index');
  });


const indexController = require("../Controllers/indexController"); 


router.get('/results', indexController.results);


module.exports = router;