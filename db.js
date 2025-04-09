var mongoose = require("mongoose")

var dotenv = require("dotenv")
dotenv.config()
mongoose.connect(process.env.mongodb_url).then(()=>{
    console.log("Connnected to DB")
}).catch((error)=>{
    console.log(error)
})