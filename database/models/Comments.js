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

    return comment;
};