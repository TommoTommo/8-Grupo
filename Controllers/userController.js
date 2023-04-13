//ME FALTA IMPORTAR LA BASE DE DATOS

const userController = {
    register : function(req, res) {
        return res.render('register', {


        });
    },

    profile : function(req, res) {
        return res.render('profile', {


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