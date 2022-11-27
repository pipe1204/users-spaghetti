const userControllers = require('./users.controllers')

const getAllUsers = (req, res) => {
    userControllers.findAllUsers()
    .then((data) => {
        res.status(200).json(data)
    })
    .catch((err) => {
        res.status(400).json({message: err.message})
    })
}

const getUserById = (req, res) => {
    const {id} = req.params
    userControllers.findUserById(id)
    .then((data) => {
        if(data) {
            res.status(200).json(data)
        } else {
            res.status(404).json({message: 'Invalid ID'})
        }
    })
    .catch(() => {
        res.status(400).json({message: 'Invalid ID'})
    })
}

const postUser = (req, res) => {
    const {first_name, last_name, email, password, birthday} = req.body

    userControllers.createUser({first_name, last_name, email, password, birthday})
    .then((data  ) => {
        res.status(200).json(data)
    })
    .catch((err) => {
        res.status(400).json({message: err.message})
    })
}

const patchUser = (req, res) => {
    const {id} = req.params
    const {first_name, last_name, email, password, birthday} = req.body

    const data = userControllers.updateUser(id, {first_name, last_name, email, password, birthday})

    if(data) {
        res.status(200).json(data)
    } else {
        res.status(400).json({message: 'Invalid Data'})
    }
}

const deleteUser = (req, res) => {
    const {id} = req.params
    const data = userControllers.deleteUser(id)
    if(data) {
        res.status(200).json(data)
    } else {
        res.status(400).json({message: 'Invalid data'})
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    postUser,
    deleteUser,
    patchUser
}

