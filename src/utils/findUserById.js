let db = require('../database/db')
const queries = require('../../src/services/Queries/queries')

async function getuserbyid(id){
    try{
        console.log("value of id is in function---",id)
       return new Promise((resolve,reject)=>{
        db.query(queries.getUserById,[id],(err,result)=>{
            if(err){
                console.log("Error finding user ById---------", err.stack);
                reject(err)
            }
            else{
                console.log("value got from getuserbyid function------", result);
                resolve(result)
            }
        })
       })

    }
    catch(err){
        console.log("Error came from findUserById API",err.stack)
        return err.message

    }
}

module.exports={
    getuserbyid
}