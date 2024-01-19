const {con}= require("../../database/db.js")
const jwt= require("jsonwebtoken")

function loginUser(req,res){
    const {username,password}=req.query

    //checking user exists or not
    const sql_username_check= "select * from authentication where username=?"
    const sql_password_check= "select password,role from authentication where username=?"
    con.query(sql_username_check,[username],(err,record)=>{
        if(record.length>0){
            con.query(sql_password_check,[username],(err,record)=>{
                if(record[0].password==password){
                    const role=record[0].role
                    const secretKey="hostel_food_bored"
                    const token = jwt.sign({username: username}, secretKey, { expiresIn: '7d' });
                    res.send({ "message": "Authentication successful", "status": "true", "token": token,"role":role });
                }else{
                    res.send({"message":"password does not match","status":"false"})
                }
            })
        }else{
            res.send({"message":"user does not exist","status":"false"})
        }
    })

}

module.exports=loginUser