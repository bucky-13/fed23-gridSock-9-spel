function calculateScore(activeGame, currentGame, roomId) {
    let correctCount = 0;
    const totalCells = currentGame.grid.length * currentGame.grid[0].length;

    for (let i = 0; i < activeGame.grid.length; i++) {
        for (let j = 0; j < activeGame.grid[i].length; j++) {
            if (activeGame.grid[i][j] === currentGame.grid[i][j]) {
                correctCount++;
            }
        }
    }

    const score = (correctCount / totalCells) * 100;
    return { score, maxScore: 100 };
}

module.exports = (io, socket, users, rooms, currentGameboardsUsed, activeGames) => {
    socket.on('gameFinished', (roomId) => {

        const activeGame = activeGames[roomId];
        const currentGame = currentGameboardsUsed[roomId];
        const result = calculateScore(activeGame, currentGame, roomId);
        io.to(roomId).emit('gameResult', result, activeGame, currentGame);
    })
}