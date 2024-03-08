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
                      // Converts to normal arrays, use on colors and players
        let colors = result[0].colors.split(',')

        // First conversion of 2 dimensional array into one long array with strings
        let grid1dString = result[0].grid.split(',')
        // Changes the strings in the 2d array into numbers (int)
        let grid1dInt = grid1dString.map(function (str) {
            return parseInt(str);
        })

        // This is the final version of the 2 dimensional array
        let grid = [];
        // This is each row that gets inserted
        let gridColumns = [];

        // Loops over the entire grid array to turn it into a 2d array again
        for (let i = 0; i < grid1dInt.length; i++) {
            
            gridColumns.push(grid1dInt[i])

            // When each row have X amount of entries, it gets pushed to grid and empties so a new row can be created
            if (gridColumns.length >= result[0].gridColumns) {
                grid.push(gridColumns);
                gridColumns = [];
            }
      }

      let currentGameboard = {
        boardId: result[0].boardId,
        gridColumns: result[0].gridColumns,
        name: result[0].name,
        description: result[0].description,
        colors: colors,
        grid: grid
      };
 

      

      res.json(currentGameboard);
                
                

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