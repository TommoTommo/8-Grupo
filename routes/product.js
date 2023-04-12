

var express = require('express');
var router = express.Router();






const productController = require("../Controllers/productController") 
/* GET users listing. */
router.get('/', productController.products);

router.get('/add', productController.add);



module.exports = router;