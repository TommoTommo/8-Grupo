claveCorrecta= false
const Data = require("../Data/data")
/* let op = data.sequelize.op; */

const userController = {
    
    formRegister : function(req, res) {
        return res.render('register', {

        });
    },
    registerPost: (req, res) => {

    },

    formLogin: function(req, res) {
      return res.render('login')
  },
  loginPost: function(req, res) {
    if (req.body.email !== "" && req.body.password !== "") {
      if (!res.locals.user) {
          Usuarios.findOne({
              where: {
                  email: req.body.email
              }
          })
              .then(function (usuario) {
                  if (usuario) {
                      if (bycript.compareSync(req.body.password, usuario.password)) {
                          req.session.user = usuario.dataValues;
                          if (req.body.recordame === "true") {
                              res.cookie('recordame', usuario.email, { maxAge: 1000 * 60 * 60 * 24 * 7 })
                          }
                          return res.redirect('/')
                      } else {
                          return res.render('login', { errors: { password: { msg: 'Contraseña incorrecta' } } })
                      }
                  } else {
                      return res.render('login', { errors: { email: { msg: 'No se encuentra registrado' } } })
                  }
              })
              .catch(function (error) {
                  console.log(error)
              })
      } else {
          return res.redirect('/')
      }
  } else {
      return res.render('login', { errors: { email: { msg: 'El campo emial debe estar completo' } } })
  }

},

    profile : function(req, res) {

        //no se cual usar id1 o id2 , quiero acceder al id del usario en session.
      //no uso res porque es response
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
//     profilelogin: function(req, res) {
//         return res.render('login', {

// //No borrar el codigo de abajo plzzz (28/5)
// //clave correcta es un boolean que es true cuando el login es exitoso
// //result es una varaible que que es un objeto que contiene la info del usario que se logeo de la databse
// //     claveCorrecta= true;
// //     result= "'1', 'Teresa', 'tere@gmail.com', '1234', 'default-image.png', '2023-05-20 21:58:56', '2023-05-20 21:58:56', NULL

// if (claveCorrecta) {
    
//     req.session.user= result.dataValues;
// }

//         });
//     }
}



module.exports = userController;