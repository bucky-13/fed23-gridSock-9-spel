let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
    req.app.locals.con.connect(function (err) {
        if (err) {
            console.log(err);
        }

        let sqlCount = `SELECT COUNT(*) as count FROM gameboards`;

        req.app.locals.con.query(sqlCount, function (err, result) {
            if (err) {
                console.log(err);
            }

            const count = result[0].count;
            console.log(typeof result[0].count);

            // Generera ett slumpmässigt id
            let randomId = Math.floor(Math.random() * count) + 1;

            // Hämta den rad med det slumpmässiga idt från tabellen
            let sqlRandomRow = `SELECT * FROM gameboards WHERE boardId = ${randomId}`;

            req.app.locals.con.query(sqlRandomRow, function (err, result) {
                if (err) {
                    console.log(err);
                }
                res.json(result[0]);

            });

           
            
        });
    });

});

// POST request for leter use (SAVE GAME)!

/*
router.post('/', (req, res, next) => {
    req.app.locals.con.connect(function (err) {
        if (err) {
            console.log(err);
        }
        let userName = req.body.userName;
        let firstSql = `SELECT * FROM users WHERE userName="${userName}"`
        // THIS CHECK IF USER ALREADY EXISTS, IF YES, SENDS BACK INFORMATION ABOU TUSER
        req.app.locals.con.query(firstSql, function (err, user) {
            if (err) {
                console.log(err);
            }
            if (user[0]) {
                res.json(user[0])
            } else {
                // IF USER DOESN'T EXIST, CREATES USER AND SENDS BACK CREATED USER INFORMATION
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
*/

module.exports = router;