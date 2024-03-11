// gets a response from digital ocean with a test database
/*
app.get('/randomGame', (req,res) => {
     req.app.locals.con.connect(function (err) {
    if (err) {
      console.log(err);
       }
       
       // Which board to get, 1-5 exists
        let id = 3;

    // GET all in test collection
      let sql = `SELECT * FROM gameboards WHERE boardId = ${id}`;

		// GET all in test collection
		let sql = `SELECT * FROM gameboards WHERE boardId="${id}"`;

		req.app.locals.con.query(sql, function (err, result) {
			if (err) {
				console.log(err);
			}

			// Converts to normal arrays, use on colors and players
			let colors = result[0].colors.split(',');

			// First conversion of 2 dimensional array into one long array with strings
			let grid1dString = result[0].grid.split(',');
			// Changes the strings in the 2d array into numbers (int)
			let grid1dInt = grid1dString.map(function (str) {
				return parseInt(str);
			});

			// This is the final version of the 2 dimensional array
			let grid = [];
			// This is each row that gets inserted
			let gridColumns = [];

			// Loops over the entire grid array to turn it into a 2d array again
			for (let i = 0; i < grid1dInt.length; i++) {
				gridColumns.push(grid1dInt[i]);

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
				grid: grid,
			};

*/
// SOCKET ROOMS

// app.post('/', function (req, res, next) {
//   req.app.locals.con.connect(function (err) {
//     if (err) {
//       console.log(err);
//     }
//       // let sqlQuery = `INSERT INTO test2 (array) VALUES ("${gameboard1.colors}")`;

//       let sqlQuery = `INSERT INTO gameboards (gridColumns, name, description, colors, grid) VALUES (${gameboard1.gridColumns}, "${gameboard1.name}", "${gameboard1.description}", "${gameboard1.colors}", "${gameboard1.grid}")`;

//     req.app.locals.con.query(sqlQuery, function (err, result) {
//       if (err) {
//         console.log(err);
//         }
//          res.json(result);
//     });
//   });
// });

// let gameboard1 = {}