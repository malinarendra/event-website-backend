const { con } = require("../../database/db.js")

function deleteQuery(req, res) {
    const { queryid } = req.query
    const sql = "delete from query where id=?"
    con.query(sql, [queryid], (err, result) => {
        if (err) {
            console.error(err);
            res.send({ "message": "server error", "status": "false" });
        } else {
            if (result.affectedRows===0) {
                res.send({ "message": "No query found with the provided id", "status": "false" });
            } else {
                res.send({ "message": "1 query deleted", "status": "true" });
            }
        }
    })
}

module.exports = deleteQuery