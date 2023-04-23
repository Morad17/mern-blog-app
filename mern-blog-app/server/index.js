const express = require("express")
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/User.js')
const bcrypt = require('bcryptjs')

const salt = bcrypt.genSaltSync(10)

require('dotenv').config()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI)

app.post('/register', async (req,res)=> {
    const { username, password: password} = req.body
    const userDoc = await User.create({ username, password:bcrypt.hashSync(password, salt)})
    res.json(userDoc)
})

app.post('/login', async (req,res)=> {
    const { username, password } = req.body
    const userDoc = await User.findOne({username})
    const passOk = bcrypt.compareSync(password, userDoc.password)
    res.json(userDoc)
})

app.listen(4000) 

