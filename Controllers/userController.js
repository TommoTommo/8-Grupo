claveCorrecta= false
const db = require("../database/models")
const bcrypt = require('bcryptjs')

let user = db.User
let op = db.Sequelize.Op
/* let op = data.sequelize.op; */

const userController = {
    
    //uso del CRUD create
    
     formRegister : function(req, res) {
      if (req.session.user ==undefined) {
        return res.render('register', {

        })}else{return res.redirect("/")
      }


    }, 
    //store
    registerPost: (req, res) => {
        
        let errors = {};

          if (req.body.user == "") {
             errors.message = "El campo 'nombre' esta vacío";
              res.locals.errors = errors; //me permite llevar la información a las vistas 
              return res.render('register'); 
        
          }  else if (req.body.email == "") {
              errors.message = "El campo 'email' esta vacio";
              res.locals.errors = errors;
              return res.render('register');

          }  else if (req.body.pass.length <= 3) {
              errors.message = "El campo 'contraseña' requiere mínimo 3 caracteres";
              res.locals.errors = errors;
              return res.render('register');

          }  else if (req.body.imagen == "") {
              errors.message = "Por favor, suba una foto de perfil";
              res.locals.errors = errors;
             return res.render('register');

         } 
        
         let info = req.body;
         let userStore = {
             nombre: info.usuario,
             email: info.email,
             pass: bcrypt.hashSync(info.pass, 10),
             imagen: info.imagen, 
         }
         db.User.create(userStore)
         .then(function(result) {
             return res.redirect("/user/login")
         }).catch(function(err) {
             if (err.errors[0].validatorKey == "not_unique") { // el catch trae errores y le pedi que me traiga el primer error [0] y .validationKey es el error que si es "no unico" (==) me mande el mensaje que esta abajo 
                errors.message = "El mail ya existe";
                 res.locals.errors = errors;
                return res.render('login'); // !!
            }
           
         })


    },
    formLogin: function(req, res) {
      if (req.session.user ==undefined) {
        return res.render('login'); 
    }else{return res.redirect("/")
    }
      
    },
    loginPost: function(req, res) {
      let emailBuscado = req.body.email;
      let pass = req.body.password;

      let filtrado = {
          where: [{email: emailBuscado}]
      };
      user.findOne(filtrado)
      .then((result) => {
        
          if (result != null) {
              let claveCorrecta = bcrypt.compareSync(pass, result.pass)
              if (claveCorrecta) {
                  //pone un usuario en session
                  req.session.user= result.dataValues;
                  //hago clic en recordame = creamos una cookie
                  if(req.body.rememberme != undefined){
                    res.cookie('userId', result.dataValues.id, {maxAge: 1000 * 60 * 15}); 
                  }
                  return res.redirect("/"); //Existe el email y la password es correcta, por eso me manda al login por ruta post
              } else {
                  return res.send("Existe el email, pero la password es incorrecta");
              }
          } else {
              return res.send("No existe el email ingresado")
          }
          
      }).catch((err) => {
        /* if (err.errors[0].validatorKey == "not_unique") {  
            errors.message = "El mail ya existe";
            res.locals.errors = errors;
            return res.render('user/login');
        } */ 
          console.log(err);
      }); 
  }, 

    profile : function(req, res) {
           
  
              let id=req.params.id;
           
            
    
              /* Crear relacion */
              let rel = {
                include: [{ association: "product" }],
                order: [['created_at', 'ASC']],
              };
      
              
              user.findByPk(id, rel)
              
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
    profileEdit : function(req, res) {
      if (req.session.user == undefined) {
        // mostrar error que dice, no estas logeado
        return res.redirect('/');
      } else {
        let idProfile = req.params.id;
        user.findByPk(idProfile)
        
        .then((resultado) => {
          
          return res.render("profileEdit", {user: resultado}),
          console.log(idProfile)
        }).catch((err) => {
          console.log(err)
        });
        
      } 
    },

    profileEditSend : function (req, res) {
      let id = req.params.id;
      let data = req.body;
      console.log(data);
      if (data.pass != "") {
        data.pass=bcrypt.hashSync(data.pass, 10),
      user.update(data, {
          where: [{ id: id }],
        })
        .then((result) => {
          return res.redirect("/user/profile/" + id);
          
        })
        .catch((err) => {
          console.log(err);
        });
      } else {
        delete data.pass
        user.update(data, {
          where: [{ id: id }],
        })
        .then((result) => {
          return res.redirect("/user/profile/" + id);
          
        })
        .catch((err) => {
          console.log(err);
        });

      }
    },


    logout: (req, res) => {
       // Destruir la session 
        req.session.destroy();
       // Destruir la cookie 
        res.clearCookie('userId');
         return res.redirect('/'); 
    }, 

    searchUser: function(req, res) {
      let busqueda = req.query.search
    
     
   
         user.findAll({
          where: [
            {
              [op.or]: [
                { nombre: { [op.like]: "%" + busqueda + "%" } },
                { email: { [op.like]: "%" + busqueda + "%" } }
              ]
            }
          ]
         })
         .then(function (result) {
          
        return res.render("searchResultsUser", { listaUser: result });
           })
           .catch(function (error) {
             console.log(error);
          })
         }

}



module.exports = userController;





