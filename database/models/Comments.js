module.exports = function(sequelize, dataTypes) {
    
    let alias = "Comment";

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        comentarios:{
            type: dataTypes.STRING,
        },
        update_at:{
            type: dataTypes.DATE,
        },
        created_at:{
            type: dataTypes.DATE,
        },   
        user_id:{
            type: dataTypes.INTEGER,
        },   
        product_id:{
            type: dataTypes.INTEGER,
        }


    };
    

    let config = {
        tableName: 'comentarios',
        timestamps: false, //Si la tabla no tiene los campos created_at y updated_at
        underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
    };

    const comment = sequelize.define(alias, cols, config);

//Hago dos aosociasiones una con users y la otra con products
 comment.associate = function(models) {
    comment.belongsTo(models.User, {
        as: "user2",
        foreignKey: "user_id"
    })
    comment.belongsTo(models.Product, {
        as: "product2",
        foreignKey: "product_id"
    })
}; 
    return comment;
};