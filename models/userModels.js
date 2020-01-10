const db = require('../database/dbConfig.js');

function findOperators() {
    return db('operator')
        .orderBy('id', "asc")
        .groupBy('username')

}
function findDiners() {
    return db('diner')
        .orderBy('id', "asc")
        .groupBy('username')

}

function findUser(filter) {
    const { username, type } = filter
    
    if(type === 'diner'){
        return db('diner').where({username})
    } else {
        return db('operator').where({username});
    }
}

function findUserById(type, id) {
    if(type === 'diner'){
        return db('diner')
            .select(
                'type',
                'id',
                'username',
                'email',
                'currentLocation'
            ).where({ id })
            .first();
    } else if(type === 'operator') {
        return db('operator')
        .select(
            'type',
            'id',
            'username',
            'email',
            'currentLocation'
        ).where({ id })
            .first();
    } else {
        return 'not a valid Database'
    }
}

async function insert(user) {
    const [id] = await db(`${user.type}`).insert(user);

    return findUserById(user.type, id);
}

module.exports = {
    findOperators,
    findDiners,
    findUser,
    findUserById,
    insert
}