
module.exports = function (sequelize, DataTypes) {

    var Detail = sequelize.define('details', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            validate: {
                notEmpty: true
            }
        },
        // 原访问地址
        imgurl: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                isUrl: true
            }
        }
    });
};