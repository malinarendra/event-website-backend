const { con } = require("../../database/db.js")

function registerUser(req, res) {
    const { fname, lname, email, mobile, username, password } = req.query
    const role="user"
    const sql_check = "select * from authentication where username=? or email=?"
    const sql_mobile = "select * from authentication where mobile=?"
    const sql_register = "insert into authentication values(?,?,?,?,?,?,?)"

    con.query(sql_check, [username, email], async (err, record) => {
        if (await record.length > 0) {
            res.send({ "message": "user already exists", "status": "false" })
        }
        else {
            con.query(sql_mobile, [mobile], async(err, record) => {
                if (await record.length > 0) {
                    res.send({ "message": "user already exists", "status": "false" })
                } else {
                    con.query(sql_register, [fname, lname, mobile, email, username, password,role], (err) => {
                        if (err) {
                            console.log(err)
                            res.send({ "message": "cannot register user", "status": "false" })
                        }
                        else {
                            res.send({ "message": "user registered", "status": "true" })
                        }
                        return
                    })
                }
            })
        }
    })
}

module.exports = registerUser