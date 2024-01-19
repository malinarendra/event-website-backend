const { storage, ref, getStorage } = require("../../firebase_database/firebasedb.js")

const { con } = require("../../database/db.js")

async function postEvent(req, res) {
    const file = await req.file
    const ename = await req.body.ename
    const edate = await req.body.edate
    const elocation = await req.body.elocation
    const edescription = await req.body.edescription
    const eaction = await req.body.eaction
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    // Create a storage reference from our storage service
    const storageRef = ref.ref(storage, `images/${Date.now()}-${file.originalname}`);

    const metadata = {
        contentType: req.file.mimetype,
    }

    const snapshot = await getStorage.uploadBytesResumable(storageRef, req.file.buffer, metadata)

    // Get the URL of the uploaded image
    const imageUrl = await ref.getDownloadURL(storageRef);

    let eid = ''

    for (let i = 0; i < 15; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        eid += characters.charAt(randomIndex);
    }

    const sql = "insert into events values(?,?,?,?,?,?,?)"
    con.query(sql, [eid, ename, edate, elocation, edescription, imageUrl, eaction], (err) => {
        if (err) {
            res.send({ "message": "cannot insert user query", "status": "false" })
        }
        else {
            res.send({ "message": "1 record inserted", "status": "true" })
        }
        return
    })

}

module.exports = postEvent