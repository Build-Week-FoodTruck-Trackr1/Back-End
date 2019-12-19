const db = require('../database/dbConfig.js');

function findUser(userType, filter) {
    if(userType === 'diner'){
        return db(`diners`)
            .select(
                'id',
                'username',
                'email',
                'currentLocation',
                'favoriteTrucks'
            ).where(filter)
    } else {
        return db('operators')
            .select('id', 'username', 'trucksOwned')
            .where(filter);
    })
}

function findUserById(userType, id) {
    if(userType === 'diner'){
        return db(`diners`)
            .select(
                'id',
                'username',
                'email',
                'currentLocation',
                'favoriteTrucks'
            ).where({ id }).first();
    } else {
        return db('operators')
            .select('id', 'username', 'trucksOwned')
            .where({ id })
            .first();
    })
  }

async function insert(userType, user) {
    const [id] = await db(`${userType}`).insert(user)

    return findUserById(id)
}

module.exports = {
    findUser,
    findUserById,
    insert
}