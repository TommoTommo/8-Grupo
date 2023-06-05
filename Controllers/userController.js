
const db = require("../database/models")

let user = db.User
let op = db.Sequelize.Op

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
    //SACO EL ! DEL != undefined PORQUE TODAVIA NO SE PEDUE INICIAR SECION
    if (req.session.user = !undefined) {
            //let id=req.session.user.id
              let id2=1 


              /* Crear relacion */
              let rel = {
                include: [{ association: "product" }],
              };


              user.findByPk(id2, rel)

                .then(function (result) {
                  console.log(result);
                  return res.render("profile", {
                    userdata: result,
                  });
                })
                .catch(function (error) {
                  console.log(error);
                });
            }else{
           return res.redirect("/users/login");
         }




        }



}



module.exports = userController;