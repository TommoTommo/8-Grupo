var express = require('express');
var router = express.Router();
const productController = require("../Controllers/productController") 

/* GET users listing. */

router.get('/id/:id', productController.detalle);

router.post('/id/:id', productController.commentPost);



router.get('/add', productController.add);

/* Mostrar producto */
router.get("/register", productController.showForm);

/* Guardar producto */
router.post("/register", productController.store); 

router.get("/register", productController.showForm);

module.exports = router;