var express = require('express');
var router = express.Router();
const indexController = require("../Controllers/indexController"); 
/* GET home page. */

router.get("/", indexController.index)


router.get("/search" , indexController.results)

// router.get('/results', indexController.results);


module.exports = router;