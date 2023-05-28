const Data = require("../Data/data")


const productController = {
    add : function(req, res) {
        return res.render('productAdd', {


        });
    },
    product : function(req, res) {
     /* filtrar por primaryKey */
     let id = req.params.id; //4

     /* Crear relacion */
     let rel = {
       include: [{ association: "user1" }, { association: "comment2" }],
     };
 
     movie.findByPk(id, rel)
       .then(function (result) {
         console.log(result);
         return res.render("product", {
           productdata: result,
         });
       })
       .catch(function (error) {
         console.log(error);
       })

    },
    
    /* Para mostrar producto */ 
    showForm: (req, res) =>{
        return res.render("productAdd")
    },
    store: (req, res) =>{
        return res.redirect("/index")
    }
};

module.exports = productController;