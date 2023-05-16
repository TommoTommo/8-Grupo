var express = require('express');
var router = express.Router();

/* GET home page. */





const indexController = require("../Controllers/indexController") 
/* GET users listing. */
router.get('/', function(req, res) {
    listanames=[];
    listaimages=[];
    for (let index = 0; index < 8; index++) {
        
        let name = Data.productos[index].id;
        listanames.push(name);
        let image=Data.productos[index].image;
        listaimages.push(image)
    }
    });

router.get('/results', indexController.results);


module.exports = router;