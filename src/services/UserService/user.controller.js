const db = require('../../database/db')
const queries = require('../Queries/queries')

exports.addUser = async(req,res,next)=>{
    try{

        // const {id, userName, email, phone, password} = req.body
        const reqBodyData  = req.body
        console.log("reqBodyData: ",reqBodyData)
        let Data = Object.values(reqBodyData)
        console.log("Data: ",Data);

        db.query(queries.createUser,Data,(err,result)=>{
            console.log("queries",queries);
            if (err) {
                console.log("error creating user---------",err.stack);
                res.status(500).json(err);
            } else {
                console.log("data of new user Added into database------",result);
                res.status(200).json(result);
            }
        })
    }
    catch(err){
        console.log("Error came from createUser API",err.stack)
        return res.status(500).json(err.message)
    }
}

exports.getAllUser = async(req,res,next)=>{
    try{
        db.query(queries,(err,result)=>{
            if (err) {
                console.log("error getting all users---------",err.stack);
                res.status(500).json(err);
            } else {
                console.log("get all data from database------",result);
                res.status(200).json(result);
            }
        })
    }
    catch(err){
        console.log("Error came from getAllUser API",err.stack)
        return res.status(500).json(err.message)
    }
}