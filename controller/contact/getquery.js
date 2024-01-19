const { json } = require("body-parser")
const { con } = require("../../database/db")

function getAllQueries(req, res) {
    const sql = "select * from query"
    con.query(sql, async (err, records) => {
        if (err) {
            res.send({ "message": "cannot sent you all queries", "status": "false" })
        }
        else {
            if (records.length > 0) {
                const tempData = await records
                const jsonStringData = await JSON.stringify(tempData)
                res.send({ "data": jsonStringData, "status": "true" })
            }else{
                res.send({ "message":"no queries", "status": "false" })
            }
        }
    })
}

module.exports = getAllQueries