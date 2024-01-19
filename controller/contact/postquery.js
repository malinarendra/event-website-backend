const { con } = require("../../database/db.js")

function submitUserQuery(req, res) {
    //getting all parameters
    const { fname, lname, email, phoneno, message } = req.query
    //generating unique id for queryid
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let queryid = '';

    for (let i = 0; i < 15; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        queryid += characters.charAt(randomIndex);
    }
    // generating query date
    let date = new Date()

    const sql = "insert into query values(?,?,?,?,?,?,?)"
    con.query(sql, [queryid, fname, lname, email, phoneno, message,date], (err) => {
        if (err) {
            res.send({ "message": "cannot insert user query", "status": "false" })
        }
        else {
            res.send({ "message": "1 record inserted", "status": "true" })
        }
        return
    })
}

module.exports = submitUserQuery