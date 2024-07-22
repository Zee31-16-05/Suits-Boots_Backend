var express = require('express');
const router = express.Router();
const addUserController = require('../UserService/user.controller');

router.post('/create-user', function(req, res) {
    return addUserController.addUser(req, res)
})

router.get('/getAll-user',function(req,res){
    return addUserController.getAllUser(req, res)
})

router.put('/update-user/:id', function(req, res){
    return addUserController.updateUser(req, res)
})

router.get('/get-user/:id',function(req,res){
    return addUserController.getSpecificUser(req, res)
})

router.delete('/delete-user/:id',function(req,res){
    return addUserController.deleteUser(req, res)
})





module.exports = router;