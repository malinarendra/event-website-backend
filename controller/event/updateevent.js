const {con} = require("../../database/db.js")

async function updateEvent(req, res) {
    const{eid,ename,edate,elocation,edescription,eaction}=req.query

    const sql = `UPDATE events SET name=?, date=?, location=?, description=?, action=? WHERE id=?`;
    con.query(sql, [ename, edate, elocation, edescription,eaction, eid], (err, results) => {
        if (err) {
            console.error("Error updating record:", err);
            res.status(500).json({ "message": "Cannot update record", "status": "false" });
        } else if (results.affectedRows === 0) {
            res.status(404).json({ "message": "Record not found", "status": "false" });
        } else {
            res.status(200).json({ "message": "1 record updated", "status": "true" });
        }
    });


}

module.exports = updateEvent