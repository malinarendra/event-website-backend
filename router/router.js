const express = require("express")
const router = express.Router()

//authentication
const registerUser=require("../controller/authentication/register.js")
const loginUser=require("../controller/authentication/login.js")

//event
const postEvent= require("../controller/event/postevent.js")
const {upload}=require("../firebase_database/firebasedb.js")
const deleteEvent= require("../controller/event/deleteevent")
const getEvent= require("../controller/event/getevent.js")
const updateEvent= require("../controller/event/updateevent.js")
const getParticularEvent= require("../controller/event/getparticularEvent.js")

//contact
const submitUserQuery=require("../controller/contact/postquery.js")
const getAllQueries=require("../controller/contact/getquery.js")
const deleteQuery=require("../controller/contact/deletequery.js")


// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// authentication
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
router.post("/api/login",loginUser)
router.post("/api/register",registerUser)


// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// event
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
router.delete("/api/event/",deleteEvent)
router.post("/api/event/",upload.single("myimage"),postEvent)
router.get("/api/event/",getEvent)
router.put("/api/event/",updateEvent)
router.get("/api/event/:eventid",getParticularEvent)



// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// contact
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

//submit user query
router.post("/api/contact/",submitUserQuery)

//sending all queries to admin
router.get("/api/contact",getAllQueries)

//deleting query by using it's id
router.delete("/api/contact/",deleteQuery)

module.exports=router