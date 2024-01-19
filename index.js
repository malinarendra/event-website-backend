const express = require("express")
require("dotenv").config()//dotenv
const app = express()
const bodyParser = require("body-parser")
const router= require("./router/router.js")
const PORT = process.env.PORT
const {connectMe}= require("./database/db.js")//mysql
const cors = require("cors")
//bodyparser
app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json())

//cors
app.use(cors())

//middleware for routing 
app.use("/",router)
app.use(express.json())

//connection to mysql database
connectMe()

app.listen(PORT,()=>{
    console.log(`server is running at  http://localhost:${PORT}`)
})

