module.exports = function(sequelize, dataTypes) {
    
    let alias = "User";

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        nombre:{
            type: dataTypes.STRING,
        },
        email:{
            type: dataTypes.STRING,
        },
        pass:{
            type: dataTypes.STRING,
        },
        imagen:{
            type: dataTypes.STRING,
        },
        update_at:{
            type: dataTypes.DATE,
        },
        created_at:{
            type: dataTypes.DATE,
        },
    };

    let config = {
        tableName: 'usuarios',
        timestamps: false, //Si la tabla no tiene los campos created_at y updated_at
        underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
    };

    const user = sequelize.define(alias, cols, config);
//relaciones

//relacion producto y usario A
    user.associate = function(models) {
        user.hasMany(models.Product, {
            as: "product",
            foreignKey: "user_id"
        }),
        //otra relacion

        user.hasMany(models.Comment, {
            as: "comment1",
            foreignKey: "user_id"
        })


   }; 
    return user;
};