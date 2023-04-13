var express = require('express');
var router = express.Router();

/* GET home page. */





const indexController = require("../Controllers/indexController") 
/* GET users listing. */
router.get('/', indexController.index);

router.get('/results', indexController.results);


module.exports = router;