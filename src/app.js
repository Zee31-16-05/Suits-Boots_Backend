const express = require('express')
const app = express()
const PORT = 8001
const hostname = 'localhost'

//importing user route
const userRoute = require('../src/services/UserService/user.route')


app.use(express.json()) 
app.use('/user/',userRoute)    //mapping user routes.


app.listen(PORT,()=>{
    console.log(`listening on ${hostname}: ${PORT}`)
})