const db = require('../database/dbConfig.js');

function findUser(filter) {
    const { username, type } = filter
    
    if(type === 'diner'){
        return db('diner').where({username})
    } else {
        return db('operator')
            .select('id', 'username', 'trucksOwned')
            .where(username);
    }
}

function findUserById(userType, id) {
    if(userType === 'diner'){
        return db('diner')
            .select(
                'id',
                'username',
                'email',
                'currentLocation',
                'favoriteTrucks'
            ).where({ id }).first();
    } else {
        return db('operator')
            .select('id', 'username', 'trucksOwned')
            .where({ id })
            .first();
    }
}

async function insert(user) {
    const [id] = await db(`${user.type}`).insert(user)

    return findUserById(user.type, id)
}

module.exports = {
    findUser,
    findUserById,
    insert
}