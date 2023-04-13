const indexController = {
    index : function(req, res) {
        return res.render('index', {


        });
    },

    results : function(req, res) {
        return res.render('searchResults', {


        });
    }

}

module.exports = indexController;