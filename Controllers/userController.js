
const Data = require("../Data/data")
const userController = {
    register : function(req, res) {
        return res.render('register', {


        });
    },

    profile : function(req, res) {




        return res.render('profile', {
            usuario: Data.usuario.usuario,
            email: Data.usuario.email,
            contrasena: Data.usuario.contrasena,
            fechanacimiento: Data.usuario.fechanacimiento,
            documento: Data.usuario.documento,
            foto: Data.usuario.foto

        });
    }
    
    ,
    profileedit : function(req, res) {
        return res.render('profileEdit', {

        });
    },
    profilelogin: function(req, res) {
        return res.render('login', {


        });
    }
}

module.exports = userController;