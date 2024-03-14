let express = require('express');
let router = express.Router();

const { users, rooms, currentGameboardsUsed, activeGames } = require('../lib/serverDatabase');

let activeGamesSchema = {
    animals: {},
    fruits: {},
    random: {}
}

router.get('/finishGame/:roomId', (req, res, next) => {

    let roomId = req.params.roomId;

    let game = activeGames[roomId]
    // let colors = filterQuotes(activeGames[roomId].colors)

    console.log(game);

    req.app.locals.con.connect(function (err) {
        if (err) {
            console.log(err);
        }
        let sqlInsert = `INSERT INTO finishedGames (boardId, userId1, userId2, userId3, userId4, gridColumns, description, colors, grid) VALUES (${game.boardId}, ${game.userId1}, ${game.userId2}, ${game.userId3}, ${game.userId4}, ${game.gridColumns}, "${game.description}", "${game.colors}", "${game.grid}")`

        // res.send(finishedGame)

        // let sqlCount = `SELECT COUNT(*) as count FROM gameboards`;

        req.app.locals.con.query(sqlInsert, function (err, result) {
            if (err) {
                console.log(err);
            }

            let finishedGameId = result.insertId

            let sqlFindGame = `SELECT * from finishedGames WHERE gameId="${finishedGameId}"`

            req.app.locals.con.query(sqlFindGame, function (err, result) {

                res.json(result)

             }) 
        });
    });
});

router.get('/:roomId', (req, res, next) => {

    let roomId = req.params.roomId;

    console.log(roomId);
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
            // console.log(typeof result[0].count);

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
                console.log(typeof colors);

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
        
            // Add logic here to make game room be the same as the game room the user sends the request from
      
                currentGameboardsUsed[roomId] = currentGameboard

                let gridCols = result[0].gridColumns
                let gridLength = currentGameboard.grid.length
           
                activeGamesSchema[roomId].grid = []
                // let gridColumns2 = []
                // for (let i = 0; i < gridCols; i++) {
                //     gridColumns2.push(5)
                // }
                for (let j = 0; j < gridLength; j++) {
                    let gridColumns2 = []

                    for (let i = 0; i < gridCols; i++) {
                    gridColumns2.push(5)
                    }

                    activeGamesSchema[roomId].grid.push(gridColumns2)
                }
                
                activeGames[roomId].boardId = result[0].boardId
                activeGames[roomId].colors = colors;
                activeGames[roomId].gridColumns = result[0].gridColumns;
                activeGames[roomId].description = result[0].description;
                activeGames[roomId].grid = activeGamesSchema[roomId].grid;

                // resets local variables 
                delete activeGamesSchema[roomId].grid


            res.json(currentGameboard);
            });  
        });
    });
});

router.get('/playedGames/:userId', (req, res, next) => {

    let userId = req.params.userId;

    req.app.locals.con.connect(function (err) {
        if (err) {
            console.log(err);
        }

        let sqlFindGame = `SELECT * FROM finishedGames WHERE userId1="${userId}" OR userId2="${userId}" OR userId3="${userId}" OR userId4="${userId}"`

        req.app.locals.con.query(sqlFindGame, function (err, result) {
            if (err) {
                console.log(err);
            }

            let allPlayedGameboards = [];

            for (let x = 0; x < result.length; x++) {

                let colors = result[x].colors.split(',')
                console.log(typeof colors);

                // First conversion of 2 dimensional array into one long array with strings
                let grid1dString = result[x].grid.split(',')
                // Changes the strings in the 2d array into numbers (int)
                let grid1dInt = grid1dString.map(function (str) {
                    return parseInt(str);
                })

                // This is the final version of the 2 dimensional array
                let grid = [];
                // This is each row that gets inserted
                let gridColumns = [];

                for (let i = 0; i < grid1dInt.length; i++) {
            
                gridColumns.push(grid1dInt[i])

                // When each row have X amount of entries, it gets pushed to grid and empties so a new row can be created
                if (gridColumns.length >= result[x].gridColumns) {
                grid.push(gridColumns);
                gridColumns = [];
                }
                }
                let currentGameboard = {
                boardId: result[x].boardId,
                gridColumns: result[x].gridColumns,
                name: result[x].name,
                description: result[x].description,
                colors: colors,
                grid: grid
                };

                allPlayedGameboards.push(currentGameboard)  
            }
            res.json(allPlayedGameboards);
        });
    });
});

module.exports = router;