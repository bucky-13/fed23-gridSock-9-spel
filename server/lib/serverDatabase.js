// CONST/LET ARRAYS & OBJECTS STORED ON SERVER SIDE
const users = {}; // ett objekt för att lagra användare

const rooms = {
    'animals': [],
    'fruits': [],
    'random': []
}

const currentGameboardsUsed = {
    'animals': {},
    'fruits': {},
    'random': {}
}

const activeGames = {
    'animals': {},
    'fruits': {},
    'random': {}
}

const playersInGame = {
    animals: 0,
    fruits: 0,
    random: 0
};

module.exports =  {users, rooms, currentGameboardsUsed, activeGames, playersInGame}