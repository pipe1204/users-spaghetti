const express = require('express')
const userRouter = require('./users/users.router')
const db = require('./utils/database')

const app = express()
app.use(express.json())

const port = 9000

db.authenticate()
    .then(() => console.log('Database Authenticated'))
    .catch((err) => console.log(err))

db.sync()
    .then(() => console.log('Database Synchronised'))
    .catch((err) => console.log(err))

app.get('/', (req, res) => {
    res.status(200).json({message: 'Ok!'})
}) 

app.use('/', userRouter)

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})