const jwt = require("jsonwebtoken")




module.exports = async (req, res, next) => {
    try{
        // Get token from auth header
        const token = await req.headers.authorization.split(" ")[1]
        // Check if token matches user token
        const decodedToken = await jwt.verify(
            token,
            "RANDOM-TOKEN"
        )

        // get details of logged in user
        const user = await decodedToken
        req.user = user
        // Pass down functionality to endpoint
        next()
    } catch(err) {
        res.status(401).json({
            err: new Error("Invalid request")
        })
    }
}