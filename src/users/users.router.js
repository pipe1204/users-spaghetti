const router = require('express').Router()

const userServices = require('./users.services')

//Get all users or individual user by id
router.get('/users', userServices.getAllUsers)
router.get('/users/:id', userServices.getUserById)

//Post a new user to database
router.post('/users', userServices.postUser)

//Delete an user using an id
router.delete('/users/:id', userServices.deleteUser)

//Update an user using an id
router.put('/users/:id', userServices.patchUser)

module.exports = router