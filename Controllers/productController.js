const Data = require("../Data/data")
const db = require("../database/models");
let product = db.Product;
let op = db.Sequelize.Op;


const productController = {
    detalle : function(req, res) {
      let id = req.params.id;
      let rel = {
        include: [{ association: "user1" }, { association: "comment2" }],
      };
      product.findByPk(id, rel)
        .then(function (result) {
          console.log(result);
          return res.render("product", {
            product: result,
          });
        })
        .catch(function (error) {
          console.log(error);
        });

    },


    add : function(req, res) {
        return res.render('productAdd', {


        });
    },
    product : function(req, res) {
     /* filtrar por primaryKey */
     //let id = req.params.id; //4

     /* Crear relacion */
    //  let rel = {
    //    include: [{ association: "user1" }, { association: "comment2" }],
    //  };
 
    //  movie.findByPk(id, rel)
    //    .then(function (result) {
    //      console.log(result);
    //      return res.render("product", {
    //        productdata: result,
    //      });
    //    })
    //    .catch(function (error) {
    //      console.log(error);
    //    })

    },
    
    /* Para mostrar producto */ 
    showForm: (req, res) =>{
        return res.render("/productAdd")
    },
    store: (req, res) =>{
        return res.redirect("/index")
    }
};

module.exports = productController;