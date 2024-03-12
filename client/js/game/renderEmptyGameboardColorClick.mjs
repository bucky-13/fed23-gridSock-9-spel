// Makes the Gameboard empty with only the grid left, ready to start color.
export default function renderEmptyGameboardColorClick(socket, color, roomId, currentGame) {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = '#E1D9D1';
        // Click to color, with assigned color
        cell.addEventListener('click', () => {
            const i = parseInt(cell.dataset.x);
            const j = parseInt(cell.dataset.y);
            let cellNumber = currentGame.grid[i][j];
            let cellColor = currentGame.colors[cellNumber];
            cell.style.backgroundColor = color;
            // Send colored cell-data to server
            socket.emit('updateActiveGameboardServer', roomId, i, j, color);
        });
    });
}




