const mysql2 = require("mysql2")

const con = mysql2.createConnection({
    'host':'localhost',
    'user':'root',
    'password':'',
    'database':'event_website'
})

function connectMe(){
    con.connect((err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("Connected to mysql database!")
        }
    })
}

module.exports={connectMe,con}