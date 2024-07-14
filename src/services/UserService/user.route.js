var express = require('express');
const router = express.Router();
const addUserController = require('../UserService/user.controller');

router.post('/create-user', function(req, res) {
    return EmployeeController.create(req, res)
})





module.exports = router;