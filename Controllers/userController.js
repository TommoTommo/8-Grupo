
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
      const info = req.body
      return res.redirect('/')
    },

    formLogin: function(req, res) {
      if (req.session.user != undefined) {
        return res.redirect('/movies/all');
    } else {
        return res.render('login');
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
                let claveCorrecta = bcrypt.compareSync(pass, result.password)
                if (claveCorrecta) {
                    /* poner en session */
                    
                    req.session.user = result.dataValues;

                    if (req.body.rememberme != undefined) {
                        res.cookie('userId', result.id, {maxAge: 1000 * 60 * 15});
                    }
                   
                     return res.redirect('/movies/all');
                } else {
                    return res.send("Existe el mail y pero la password es incorrecta");
                }
            } else {
                return res.send("Noooo Existe el mail")
            }
            
        }).catch((err) => {
            console.log(err);
        });
       
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

<<<<<<< HEAD

              user.findByPk(id2, rel)
=======
    
        User.findByPk(id, rel)
          .then(function (result) {
            
            return res.render("profile", {
              userdata: result,
            });
          })
          .catch(function (error) {
            console.log(error);
          });
      
    },

    profileedit : function(req, res) {
        return res.render('profileEdit', {
>>>>>>> 6869bc89ae49be8af40fa3cc7d351aa007012c4a

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