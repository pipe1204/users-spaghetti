const {v4} = require('uuid')
const user = require('../models/users.models')

const findAllUsers = async() => {
    const data = user.findAll()
    return data
}

const findUserById = async(id) => {
    const user = await user.findOne({
        where: {
            id: id
        }
    })
    return user
}

const createUser = async(userData) => {
    const user = await user.create({
        id: v4(),
        first_name: userData.first_name,
        last_name: userData.last_name,
        email: userData.email,
        password: userData.password,
        birthday: userData.birthday
})
return user
}

const updateUser = async(id, data) => {
    const userData = await user.update(data, {
        where: {
            id: id
        }
    })
    return userData
}

const deleteUser = async(id) => {
    const user = await user.delete({
        where: {
            id: id 
        }
    })
    return user
}

module.exports = {
    findAllUsers,
    createUser,
    findUserById,
    deleteUser,
    updateUser
}


