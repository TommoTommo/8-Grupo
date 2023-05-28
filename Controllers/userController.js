claveCorrecta= false
const Data = require("../Data/data")
const userController = {
    register : function(req, res) {
        return res.render('register', {

        });
    },

    profile : function(req, res) {

        //no se cual usar id1 o id2 , quiero acceder al id del usario en session.
        let id1=res.locals.user.id
        let id2=req.session.user.id
        

        /* Crear relacion */
        let rel = {
          include: [{ association: "product" }, { association: "comment1" }],
        };

    
        User.findByPk(id, rel)
          .then(function (result) {
            
            return res.render("profile", {
              userdata: result,
            });
          })
          .catch(function (error) {
            console.log(error);
          });
       
 

    }
    
    ,
    profileedit : function(req, res) {
        return res.render('profileEdit', {

        });
    },
    profilelogin: function(req, res) {
        return res.render('login', {

//No borrar el codigo de abajo plzzz (28/5)
//clave correcta es un boolean que es true cuando el login es exitoso
//result es una varaible que que es un objeto que contiene la info del usario que se logeo de la databse
//     claveCorrecta= true;
//     result= "'1', 'Teresa', 'tere@gmail.com', '1234', 'default-image.png', '2023-05-20 21:58:56', '2023-05-20 21:58:56', NULL

if (claveCorrecta) {
    
    req.session.user= result.dataValues;
}

        });
    }
}



module.exports = userController;