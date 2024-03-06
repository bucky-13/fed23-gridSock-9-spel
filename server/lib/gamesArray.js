let games = [
    {
        id: 1,
        gridColumns: 15,
        name: 'gameOne', 
        description: 'Perry Platapus',
        colors: ['#ffffff', '#ff6a04', '#2aceac', '#000000'],
        grid: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 2, 0, 3, 1, 0, 3, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 2, 2, 1, 1, 1, 2, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 2, 2, 1, 1, 1, 2, 0, 0, 0],
            [0, 1, 1, 1, 1, 0, 2, 1, 1, 1, 1, 1, 0, 0, 0],
            [0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0],
            [0, 0, 1, 1, 2, 1, 2, 2, 2, 2, 2, 2, 0, 0, 0],
            [0, 0, 0, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 0, 0],
            [0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 0, 2, 0, 0],
            [0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0],
            [0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    },
    {
        id: 2,
        gridColumns: 26,
        name: 'gameTwo',
        description: 'Terrifying Tiger',
        colors: ['#ffffff', '#f38536', '#53a15b', '#000000'],
        grid: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 2, 2, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0],
            [0, 0, 2, 2, 0, 3, 1, 1, 1, 1, 3, 0, 3, 3, 3, 3, 3, 0, 3, 1, 1, 1, 1, 3, 0, 0],
            [0, 0, 0, 0, 0, 3, 1, 0, 0, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 0, 0, 1, 3, 0, 0],
            [0, 0, 0, 0, 0, 3, 1, 0, 1, 1, 1, 1, 3, 3, 1, 3, 3, 1, 1, 1, 1, 0, 1, 3, 0, 0],
            [0, 0, 0, 0, 0, 0, 3, 3, 3, 1, 3, 3, 1, 1, 1, 1, 1, 3, 3, 1, 3, 3, 3, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1, 3, 3, 3, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 3, 3, 1, 1, 1, 3, 3, 1, 1, 1, 1, 3, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 0, 3, 1, 1, 1, 1, 1, 0, 3, 1, 1, 1, 3, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 3, 3, 3, 1, 3, 3, 1, 1, 1, 1, 1, 3, 3, 1, 3, 3, 3, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0],
            [0, 0, 0, 2, 2, 0, 3, 0, 0, 1, 1, 1, 0, 3, 3, 3, 0, 1, 1, 1, 0, 0, 3, 0, 0, 0],
            [0, 0, 0, 2, 2, 0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 3, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 3, 3, 1, 3, 3, 0, 0, 0, 0, 2, 2, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 3, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 3, 3, 1, 3, 1, 0, 0, 0, 0, 3, 3, 1, 1, 1, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 3, 3, 1, 3, 1, 3, 0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 3, 1, 0, 0, 3, 3, 1, 1, 1, 1, 1, 3, 3, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 3, 3, 3, 1, 1, 1, 3, 1, 1, 1, 3, 3, 3, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 3, 3, 3, 1, 3, 3, 1, 1, 3, 1, 1, 3, 3, 1, 3, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 3, 0, 3, 1, 0, 1, 3, 1, 0, 1, 3, 0, 3, 0, 0, 0, 0, 0],
            [0, 0, 0, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 0, 0],
            [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    },
    {
        id: 3,
        gridColumns: 32,
        name: 'gameThree', 
        description: 'Rubber Duckie',
        colors: ['#ffffff', '#f8df7a', '#d37541', '#000000'],
        grid: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0],
            [0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 2, 2, 0, 0],
            [0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1, 1, 0, 3, 3, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 3, 1, 1, 1, 1, 1, 1, 0, 3, 0, 1, 1, 3, 2, 3, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 3, 1, 1, 1, 1, 1, 1, 0, 3, 3, 1, 1, 3, 2, 2, 3, 3, 0, 0, 0],
            [0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2, 2, 2, 2, 3, 0, 0],
            [0, 0, 3, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2, 2, 2, 2, 2, 3, 0, 0],
            [0, 0, 3, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 0, 0, 0],
            [0, 0, 3, 1, 1, 3, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 3, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0],
            [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0],
            [0, 0, 3, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 3, 0, 0, 0, 0, 0],
            [0, 0, 0, 3, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 3, 0, 0, 0, 0, 0],
            [0, 0, 0, 3, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 3, 0, 0, 0, 0, 0],
            [0, 0, 0, 3, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 3, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 3, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 2, 2, 0, 0, 0, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 2, 2, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

        ]
    },
    {
        id: 4,
        gridColumns: 27,
        name: 'gameFour', 
        description: 'Flamboyant Flamingo',
        colors: ['#ffffff', '#e05e80', '#ffc13c', '#000000'],
        grid: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
            [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 3, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 2, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 2, 2, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 3, 2, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 3, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
        ]
    },
    {
        id: 5,
        gridColumns: 31,
        name: 'gameFive',
        description: 'Chaos Kitten',
        colors: ['#ffffff', '#9093a3', '#e1a5a2', '#000000'],
        grid: [
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
            [2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2, 2, 2, 3, 1, 3, 2, 2, 2, 2, 3, 1, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2, 2, 3, 2, 1, 1, 3, 3, 3, 3, 3, 1, 1, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2, 2, 3, 2, 1, 1, 3, 1, 3, 1, 3, 1, 1, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2, 3, 1, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 1, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 3, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 3, 1, 1, 1, 3, 0, 1, 1, 1, 1, 1, 3, 0, 1, 1, 1, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            [2, 2, 3, 3, 3, 3, 1, 1, 3, 3, 1, 1, 1, 1, 1, 3, 3, 1, 1, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 3, 1, 1, 1, 1, 0, 0, 2, 2, 2, 0, 0, 1, 1, 1, 1, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            [2, 2, 3, 3, 3, 3, 1, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 1, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 3, 1, 1, 0, 0, 3, 0, 0, 3, 0, 0, 3, 0, 0, 1, 1, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2, 3, 0, 0, 0, 0, 3, 3, 0, 3, 3, 0, 0, 0, 0, 3, 2, 2, 2, 2, 3, 3, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2, 2, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 2, 2, 2, 2, 2, 3, 0, 3, 2, 2, 2, 2],
            [2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 1, 0, 3, 2, 2, 2, 2],
            [2, 2, 2, 2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2, 2, 2, 2, 2, 2, 2, 3, 1, 0, 3, 2, 2],
            [2, 2, 2, 2, 2, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2, 2, 2, 2, 2, 2, 3, 1, 0, 3, 2, 2],
            [2, 2, 2, 2, 2, 3, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 3, 2, 2, 2, 2, 2, 3, 1, 0, 3, 2, 2],
            [2, 2, 2, 2, 2, 3, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 3, 2, 2, 2, 2, 3, 1, 1, 0, 3, 2, 2],
            [2, 2, 2, 2, 2, 3, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 3, 3, 2, 2, 3, 1, 1, 1, 0, 3, 2, 2],
            [2, 2, 2, 2, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 3, 3, 3, 1, 1, 1, 0, 3, 2, 2, 2],
            [2, 2, 2, 3, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 3, 1, 3, 1, 1, 0, 3, 2, 2, 2, 2],
            [2, 2, 2, 3, 1, 3, 0, 3, 0, 0, 3, 0, 0, 0, 3, 0, 0, 3, 0, 1, 3, 1, 3, 1, 0, 3, 2, 2, 2, 2, 2],
            [2, 2, 2, 3, 1, 3, 0, 3, 0, 0, 3, 0, 0, 0, 3, 0, 0, 3, 0, 3, 3, 1, 3, 1, 3, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 3, 1, 1, 0, 3, 0, 0, 3, 0, 0, 0, 3, 0, 0, 3, 0, 3, 1, 1, 3, 0, 3, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 3, 1, 1, 3, 3, 0, 0, 3, 0, 0, 0, 3, 0, 0, 3, 3, 1, 1, 1, 3, 0, 3, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 3, 1, 3, 3, 0, 0, 3, 0, 0, 0, 3, 0, 0, 3, 3, 1, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] 
        ]
    }

];

module.exports = games;