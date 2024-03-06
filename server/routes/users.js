let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
    req.app.locals.con.connect(function (err) {
        if (err) {
            console.log(err);
        }

        let sql = `SELECT * FROM users`

        req.app.locals.con.query(sql, function (err, result) {
            if (err) {
                console.log(err);
            }
            res.json(result)
        })
    })
    // res.send('users!')
})

router.post('/', (req, res, next) => {
    req.app.locals.con.connect(function (err) {
        if (err) {
            console.log(err);
        }
        let userName = req.body.userName;
        let firstSql = `SELECT * FROM users WHERE userName="${userName}"`
        req.app.locals.con.query(firstSql, function (err, user) {
            if (err) {
                console.log(err);
            }
            if (user[0]) {
                res.json(user[0])
            } else {
                let secondSql = `INSERT INTO users (userName) VALUES ("${userName}")`;
                req.app.locals.con.query(secondSql, function (err, result) {
                    if (err) {
                        console.log(err);
                    }

                    req.app.locals.con.query(firstSql, function (err, result) {
                        if (err) {
                            console.log(err);
                        }
                        res.json(result[0])
                    })
                })
            }
        })
    })
})

router.post

module.exports = router;