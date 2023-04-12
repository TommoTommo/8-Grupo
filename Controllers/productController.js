const productController = {
    products : function(req, res) {
        return res.render('product', {

            signedin: false,
            section:1
        });
    },

    add : function(req, res) {
        return res.render('product', {

            signedin: true,
            section:2
        });
    }

}

module.exports = productController;