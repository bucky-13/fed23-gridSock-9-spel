function createGrid(gridData) {
    const gridContainer = document.createElement('div');
    gridContainer.id = 'gridContainer';
    gridContainer.classList.add('gridContainer');
    gridContainer.innerHTML = '';

    gridData.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('gridRow');

        row.forEach(cell => {
            const cellDiv = document.createElement('div');
            cellDiv.classList.add('gridCell');

            rowDiv.appendChild(cellDiv);
        });

        gridContainer.appendChild(rowDiv);
    });
}

function fetchAndDisplayGameboard() {
    fetch('/game')
    .then(response => {
        if (!response.ok) {
            throw new Error('Something went wrong when fetching gameboard');
        }
        return response.json();
    })
    .then(gameboard => {
        createGrid(gameboard.grid);
    })
    .catch(error => {
        console.error('Error fetching gameboard:', error);
    });
}

module.exports = {
    fetchAndDisplayGameboard: fetchAndDisplayGameboard
};
