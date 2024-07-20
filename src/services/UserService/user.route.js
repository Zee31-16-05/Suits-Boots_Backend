var express = require('express');
const router = express.Router();
const addUserController = require('../UserService/user.controller');

router.post('/create-user', function(req, res) {
    return addUserController.addUser(req, res)
})





module.exports = router;