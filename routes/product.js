var express = require('express');
var router = express.Router();
const productController = require("../Controllers/productController") 

/* GET users listing. */
router.get('/', productController.product);

router.get('/add', productController.add);

/* Mostrar producto */
router.get("/register", productController.showForm);

/* Guardar producto */
router.post("/register", productController.store); /* grabacion crud 1:01:26

/* */

/* */

/* */

module.exports = router;