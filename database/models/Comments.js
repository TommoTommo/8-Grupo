module.exports = function(sequelize, dataTypes) {
    
    let alias = "Comment";

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        comment:{
            type: dataTypes.STRING,
        }   
    };
    

    let config = {
        tableName: 'comments',
        timestamps: false, //Si la tabla no tiene los campos created_at y updated_at
        underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
    };

    const comment = sequelize.define(alias, cols, config);

//Hago dos aosociasiones una con users y la otra con products

product.associate = function(models) {
    comment.belongsToMany(models.Product , {
        as: "product",
        through: "comentarios",
        foreignKey: "FkProdId",
        otherKey: "FkUserId",
        timestamps: true
    })
};
    return comment;
};