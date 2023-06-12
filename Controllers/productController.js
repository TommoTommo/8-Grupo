const Data = require("../Data/data")
const db = require("../database/models");
let product = db.Product;
let op = db.Sequelize.Op;


const productController = {
  //get
    detalle : function(req, res) {
      let id = req.params.id;
      let rel = {
        include: [{ association: "user1" }, { association: "comment2", include: [{  association: "user2"  }]}],
      };
      
      product.findByPk(id, rel)
        .then(function (result) {
          
          return res.render("product", {
            product: result,
          });
        })
        .catch(function (error) {
          console.log(error);
        });

    


  //     let errors = {};

  //    if (req.session.user != undefined) {

 
            


  //     if (req.body.email == "") {
  //         errors.message = "El commentario está vacio";
  //         res.locals.errors = errors;
  //         return res.render('product');
  //      } else {
  //          let info = req.body;

  //          let commentStore = {
  //              id:req.session.user.id
  //             comentarios: info.comment,
  //             updated_at:
  //              created_at:
  //              user_id:
  //              product_id:
              
  //         }



          

  //      }
  //  } else {
  //      return res.redirect("/user/login");
  //  }
  },
  //que va en post y que va en get

  //post
  commentPost: function(req, res) {
      
      let id=req.session.user.id


      user.findByPk(id)
            
      .then(function (result) {
        console.log(result);
        return res.render("profile", {
          userdata: result,
        });
      })
      .catch(function (error) {
        console.log(error);
      });

      comment.create(commentStore)
      .then(function(result) {
          return res.render('product');
      })
      .catch(function(error) {
          console.log(error);
      }); 
  },
    add : function(req, res) {
        return res.render('productAdd', {


        });
    }
    ,
    /* Para mostrar producto */ 
    showForm: (req, res) =>{
      return res.render("productAdd");
      // NO BORRAR PORFAVOR
      // if (req.session.user != undefined) {
      //   return res.render("productAdd");
      // }else{
      //   return res.redirect("/users/login");
      // }


    },
    store: (req, res) =>{
      let info = req.body;
      product
        .create(info)
        .then((result) => {
          return res.redirect("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
};

module.exports = productController;