const express = require("express")
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/User.js')

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGOOSE_URI)

app.post('/register', async (req,res)=> {
    const {username, password} = req.body
    const userDoc = await User.create({ username, password})
    res.json(userDoc)
})

app.listen(4000)

