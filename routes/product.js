var express = require('express');
var router = express.Router();
const productController = require("../Controllers/productController") 

/* GET users listing. */

router.get('/id/:id', productController.detalle);


router.post('/comment/:id',productController.commentPost);



router.get('/add', productController.add);

/* Guardar producto */
router.post("/register", productController.store); 

router.get("/register", productController.showForm);

/* Mostrar Form para Actualizar product */
router.get("/update/:id", productController.showProductUpdate)

/* Enviar actualización de movie*/
router.post("/update/:id", productController.update)

/* Elimnar movie */
router.post("/delete", productController.destroy)

module.exports = router;