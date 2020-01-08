const db = require('../database/dbConfig.js');
const atob = require('atob');
module.exports = {
    getTrucks,
    trucksOwned,
    findTruckById,
    insertTruck
};

function getTrucks(){
     return db('trucks');
}

function trucksOwned(token){
    const [,payload] = token.split('.')
    const [,,,id] =atob(payload).split(':')
    const [realId] =id.split(',')
    
   return db('trucks as t')
   .where('t.operator_id', '=', realId);
}

function findTruckById(id){
    return db('trucks')
        .select(
            'id',
            'name',
            'operator_id',
            'imgUrl',
            'cuisineType'
        ).where({ id }).first();
}

async function insertTruck(truck){
    const [id] = await db('trucks').insert(truck);

    return findTruckById(id);
}