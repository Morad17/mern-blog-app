const express = require("express")
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const salt = bcrypt.genSaltSync(10)

const User = require('./models/User.js')
const auth = require('./auth')

require('dotenv').config()
app.use(cors())
app.use(express.json())

const PORT = 4000
mongoose.connect(process.env.MONGODB_URI)

app.post('/register', (req,res)=> {
    // Create User and Hash Password
    bcrypt.hash(req.body.password, 10) 
    .then( hashedPass => {
        const user = new User({
            username: req.body.username,
            password: hashedPass
        })
        user.save()
    
      
        .then((result) => {
            res.status(201).send({
                message: "User Created Successfully",
                result,
            });
            })
        .catch((error) => {
            res.status(500).send({
                message: "Error creating user",
                error,
            }); 
        
            })
        })
    .catch((e) => {
        response.status(500).send({
          message: "Password was not hashed successfully",
          e,
        });
   })

})

app.post('/login', (req,res)=> {
    //Compare Username
    User.findOne({ username: req.body.username})
    // Compare user Password 
    .then((user)=> {
        bcrypt.compare(req.body.password, user.password)
        .then((passwordCheck) => {

            //Check if password matches
            if(!passwordCheck) {
                return res.status(400).send({
                    message: "Passwords do not match",
                    err
                })
            }
        // Create JWT token
        const token = jwt.sign(
            {
                userId: user._id,
                userUsername: user.username,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h"}
        )

        //Success response

        res.status(200).send({
            message: "Login Successfull",
            username: user.username,
            token,
        })

    })
        .catch((err)=> {
            res.status(400).send({
                message: "Password Incorrect",
                err
            })
        })
    })
    .catch((err)=> {
        res.status(404).send({
            message: "Username not Found",
            err
            })
    })
})

// free endpoint
app.get("/free-endpoint", (req, res) => {
    res.json({ message: "You are free to access anytime"})
})

// authentication endpoint
app.get("/auth-endpoint", auth, (req, res) => {
    res.json({ message: "You are authorised to access anytime"})
})

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
}) 

