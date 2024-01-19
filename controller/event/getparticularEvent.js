const { con } = require("../../database/db.js")

function getParticularEvent(req,res){
    const {eventid}= req.params

    sql= "select * from events where id=?"

    con.query(sql,[eventid],(err,record)=>{
        if (err) {
            res.send({ "message": "backend error", "status": "false" })
        }
        else {
            if(record.length>0){
                const tempData = record
                const jsonStringData = JSON.stringify(tempData)
                res.send({ "data": jsonStringData, "status": "true" })
            }
            else{
                res.send({ "message":"no events", "status": "false" })
            }
        }
    })
}

module.exports=getParticularEvent