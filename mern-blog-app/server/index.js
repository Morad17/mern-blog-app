const express = require("express")
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/User.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const salt = bcrypt.genSaltSync(10)
const secret = 'sdfasdfasdfasdfads'

require('dotenv').config()
app.use(cors())
app.use(express.json())

const PORT = 4000
mongoose.connect(process.env.MONGODB_URI)

app.post('/register', async (req,res)=> {
    const { username, password} = req.body
    const userDoc = await User.create({ username, password:bcrypt.hashSync(password, salt)})
    res.json(userDoc)
})

app.post('/login', async (req,res)=> {
    const { username, password } = req.body
    const userDoc = await User.findOne({username})
    const passOk = bcrypt.compareSync(password, userDoc.password)
    if(passOk){

        jwt.sign({username, id: userDoc._id}, secret, {}, (err, token) => {
            if (err) throw err 
            res.json(token)

        })
       
    } else {
        res.status(400).json('wrong credentials')
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
}) 

