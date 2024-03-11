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

module.exports =  {users, rooms, currentGameboardsUsed}