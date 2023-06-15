const Data = require("../Data/data")
const db = require("../database/models");
let product = db.Product;
let op = db.Sequelize.Op;
let comment=db.Comment


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
            id:req.params.id
          });
        })
        .catch(function (error) {
          console.log(error);
        });

    


  },
  

  //post
  commentPost: function(req, res) {
      



          let info = req.body;

          let commentStore = {
              comentarios: info.comment,
             user_id:req.session.user.id,
              product_id:req.params.id

          }

          if (commentStore.comentarios.length != 0) {
            comment.create(commentStore)
            .then(function(result) {
                return res.redirect(`/product/id/${req.params.id}`);
            })
            .catch(function(error) {
                console.log(error);
            }); 
          
        }else{

           return res.redirect(`/product/id/${req.params.id}`);

      }

},


    add : function(req, res) {
        return res.render('productAdd', {


        });
    }
    ,
   
    showForm: (req, res) =>{
      if (req.session.user != undefined) {
        return res.render("productAdd");
      }else{
        return res.redirect("/users/login");
      }

    },
    store: (req, res) =>{
      let info = req.body;
      info.user_id = req.session.user.id
        product.create(info)
        .then((result) => {
          return res.redirect("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
};




module.exports = productController;