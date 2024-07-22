const db = require('../../database/db')
const queries = require('../Queries/queries')
const {getuserbyid} = require('../../utils/findUserById')


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
        return new Promise((resolve,reject) =>{

            db.query(queries.readUsers,(err,result)=>{
                if (err) {
                    console.log("error getting all users---------",err.stack);
                    reject(err);
                    res.status(500).json(err);
                } else {
                    console.log("get all data from database------",result);
                    resolve(result);
                    res.status(200).json(result);
                }
            })

        })
    }
    catch(err){
        console.log("Error came from getAllUser API",err.stack)
        return res.status(500).json(err.message)
    }
}

exports.updateUser = async(req, res, next) => {
    try{
        let reqBody = req.body
        console.log("reqBody",reqBody)

        let id = req.params.id
        console.log("my params id",id);

        let updateData = Object.values(reqBody)
        console.log("updateData",updateData);

        let validUser = await getuserbyid(id)
        console.log("validUser",validUser);

        if(!validUser){
            console.log("error finding ---------",validUser);
            return "not a valid user"
        }
        else{
            // console.log("Got the User------",result);
            let dynamicSetClause = queries.updateUser(reqBody)
            console.log("dynamic set clause-----||||",dynamicSetClause);

            db.query(dynamicSetClause,[...updateData,id],(err, result) => {
                if (err) {
                    console.log("error updating users---------",err.stack);
                    res.status(500).json(err);
                } else {
                    console.log("updated data from database------",result);
                    res.status(200).json(result);
                }
            })
        }
    }
    catch(err){
        console.log("Error came from updateUser API",err.stack);
        return res.status(500).json(err.message)
    }


}


exports.getSpecificUser = async(req,res)=>{
    try{
        let id = req.params.id
        console.log("my params id",id);

        return new Promise((resolve,reject)=>{
        db.query(queries.getUserById,[id],(err, result) => {
            if(err) {
                console.log("error finding user ById---------",err.stack);
                reject(err);
                res.status(500).json(err);
            }
            else
            {
                console.log("updated data from database------",result);
                resolve(result)
                res.status(200).json(result);
            }
        })
    })

    }
    catch(err){
        console.log("Error came from getSpecificUser API",err.stack);
        return res.status(500).json(err.message)
    }
}

exports.deleteUser = async(req,res)=>{
    try{
        let id = req.params.id
        console.log("my params id",id);

        let validUser = await getuserbyid(id)
        console.log("validUser",validUser);

        if(!validUser){
            console.log("error finding ---------",validUser);
            return "not a valid user"
        }

        else{
            return new Promise((resolve,reject)=>{
                db.query(queries.deleteUser,[id],(err, result) => {
                    if(err) {
                        console.log("error while Deleting user ById---------",err.stack);
                        reject(err);
                        res.status(500).json(err);
                    }
                    else
                    {
                        console.log("Successfully deleted USER from database------",result);
                        resolve(result)
                        res.status(200).json(result);
                    }
                })
            })
        }
       

    }
    catch(err){
        console.log("Error came from Delete SpecificUser API",err.stack);
        return res.status(500).json(err.message)
    }
}