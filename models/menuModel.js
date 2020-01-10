const db = require('../database/dbConfig.js');
const atob = require('atob')

module.exports = {
    findMenuItemById,
    insertMenuItem,
    menuItems,
}

function findOperatorId(token){
    const [,payload] = token.split('.')
    const [,,,id] =atob(payload).split(':')
    const [realId] =id.split(',')
    return realId
}


function menuItems(name){
    return db('menuItems as m')
        .join('trucks as t', 'm.truck_id', 't.id')
        .select('m.*')
        .where(name, '=', 't.name')
}

function findMenuItemById(id){
    return db('menuItems').where({ id }).first();
}

async function insertMenuItem(item, token){
    const operatorId = findOperatorId(token);

    const [id] = await db('menuItems as m').insert(item)

    return findMenuItemById(id)
}
