var express = require("express");
var cors = require("cors")
var dotenv = require("dotenv")

var userRoute = require("./router/userRoute");

const productRoute = require("./router/productRoute");

var app= express();

app.use(cors());

dotenv.config()

require("./db")

app.use(express.json())

var port=process.env.port;

app.use('/api',userRoute)
app.use('/product',productRoute)


// module.exports = (req, res) => {
//     app(req, res);  // Handle the request using Express
//   };
app.listen(port,()=>{
    console.log(`server up and running on port ${port}`)
})
