const {con} = require("../../database/db.js")

function deleteEvent(req,res){
    const {eid}=req.query
    
    const sql = "delete from events where id=?"

    con.query(sql, [eid], (err, result) => {
        if (err) {
            console.error(err);
            res.send({ "message": "server error", "status": "false" });
        } else {
            if (result.affectedRows===0) {
                res.send({ "message": "No event found with the provided id", "status": "false" });
            } else {
                res.send({ "message": "1 event deleted", "status": "true" });
            }
        }
    })

}

module.exports=deleteEvent