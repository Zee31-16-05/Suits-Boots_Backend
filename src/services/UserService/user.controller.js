const db = require('../../database/db')
const queries = require('../Queries/queries')

exports.addUser = async(req,res,next)=>{
    try{
        console.log("inside createUser API controller-------");

        const {userId, username, emailId, phone, password} = req.body
        console.log("my rquest body of user",req.body);
        db.query(queries.createUser,[userId, username, emailId, phone, password],(err,result)=>{
            if (err) {
                res.status(500).send('Error inserting user into database');
            } else {
                console.log("data of new user into database------",result);
                res.status(201).send('User inserted successfully in database');
            }
        })
    }
    catch(err){
        console.log("Error came from createUser API",err.stack)
        return res.status(500).json(err.message)
    }
}