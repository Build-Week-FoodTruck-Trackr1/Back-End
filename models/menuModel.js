const db = require('../database/dbConfig.js');

module.exports = {
    findMenuItemById,
    insertMenuItem,
    menuItems,
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

async function insertMenuItem(item){
    const [id] = await db('menuItems').insert(item)
    return findMenuItemById(id)
}