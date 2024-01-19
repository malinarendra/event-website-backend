const { con } = require("../../database/db.js")

function getEvent(req,res) {
    const sql = "select * from events"

    con.query(sql, (err, records) => {
        if (err) {
            res.send({ "message": "backend error", "status": "false" })
        }
        else {
            if(records.length>0){
                const tempData = records
                const jsonStringData = JSON.stringify(tempData)
                res.send({ "data": jsonStringData, "status": "true" })
            }
            else{
                res.send({ "message":"no events", "status": "false" })
            }
        }
    })
}

module.exports = getEvent