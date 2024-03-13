const { activeGames } = require("../lib/serverDatabase");

function calculateScore(activeGame, currentGame, roomId) {
    let correctCount = 0;
    const totalCells = currentGame.length * currentGame.[0].length;

    for (let i = 0; i < activeGame.grid.length; i++) {
        for (let j = 0; j < activeGame[i].length; j++) {
            if (activeGame[i][j] === currentGame[i][j]) {
                correctCount++;
            }
        }
    }

    const score = (correctCount / totalCells) * 100;
    return {roomId, score, maxScore: totalCells };
}

function handleGameFinished(io, socket, users, rooms, currentGameboardsUsed, activeGames) {
    socket.on('gameFinished', (roomId) => {
        const activeGame = activeGames[roomId];
        const currentGame = currentGameboardsUsed[roomId];
        const result = calculateScore(activeGame.grid, currentGame, roomId);
        io.to(roomId).emit('gameResult', result);
    })
}

module.exports = { calculateScore, handleGameFinished };