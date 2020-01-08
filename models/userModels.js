const db = require('../database/dbConfig.js');

function findUsers() {
    return db('operator as o')
        .join('diner as d')
        .select('d.*', 'o.*')
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
                'id',
                'username',
                'email',
                'currentLocation'
            ).where({ id })
            .first();
    } else if(type === 'operator') {
        return db('operator')
        .select(
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
    findUsers,
    findUser,
    findUserById,
    insert
}