const {DataTypes} = require('sequelize')
const db = require('../utils/database')

const userType = db.define('users', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    birthday: {
        type: DataTypes.DATEONLY
    }
}, {
    timestamps: false
})

module.exports = userType



