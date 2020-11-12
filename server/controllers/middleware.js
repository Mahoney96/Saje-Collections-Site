module.exports = {
    checkUsername: (req, res, next ) => {
        if(req.body.checkUsername.includes('@') && req.body.username.includes('.')){
            next() 
        } else {
            res.status(403).send("Invlaid Email Address")
        }
    }
}