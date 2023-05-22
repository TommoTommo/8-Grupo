module.exports = function(sequelize, dataTypes) {
    
    let alias = "User";

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        name:{
            type: dataTypes.STRING,
        },
        email:{
            type: dataTypes.DECIMAL,
        },
        password:{
            type: dataTypes.INTEGER,
        },
        profile:{
            type: dataTypes.DATE,
        },
        date:{
            type: dataTypes.INTEGER,
        },
        dni:{
            type: dataTypes.INTEGER,
        }
    };

    let config = {
        tableName: 'users',
        timestamps: false, //Si la tabla no tiene los campos created_at y updated_at
        underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
    };

    const user = sequelize.define(alias, cols, config);
//relaciones

//relacion producto y usario A
    user.associate = function(models) {
        user.hasMany(models.Product, {
            as: "product",
            foreignKey: "FkUserId"
        }),
        //otra relacion




      //relacion Usuario  y comentario 
      user.belongsToMany(models.Comment , {
        as: "comment2",
        through: "comentarios",
        foreignKey: "FkUserId",
        otherKey: "FkProdId",
        timestamps: true
    })
   };
    return user;
};