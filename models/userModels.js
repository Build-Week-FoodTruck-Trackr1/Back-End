const db = require('../database/dbConfig.js');

function findUser(userType, filter) {
    if(userType === 'diner'){
        return db(`diners`)
            .select(
                'id',
                'username',
                'email',
                'currentLocation'
            ).where(filter)
    } else {
        return db('operators')
            .select('id', 'username', 'trucksOwned')
            .where(filter);
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