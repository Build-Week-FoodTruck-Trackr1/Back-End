const db = require('../database/dbConfig.js');
const atob = require('atob');
module.exports = {
    getTrucks,
    trucksOwned,
    findTruckById,
    insertTruck,
    remove,
    update,
    truckRating,
    truckRate,
    findTruck
};

function findOperatorId(token){
    const [,payload] = token.split('.')
    const [,,,id] =atob(payload).split(':')
    const [realId] =id.split(',')
    
    return realId
}

function getTrucks(){
     return db('trucks as t')
        .join('currentLocation as c', 't.id', 'c.truck_id')
        .join('nextLocation as n', 't.id', 'n.truck_id')
        .select('t.*', 'c.currentLocation', 'c.currentDepartureTime', 'n.arrivalTime', 'n.location', 'n.departureTime' )
}

function trucksOwned(token){
   const id = findOperatorId(token)
    
   return db('trucks as t').where('t.operator_id', '=', id);
}

function truckRating(name){
    return db('customerTruckRatings as c')
    .join('trucks as t', 'c.truck_id', 't.id')
    .join('diner as d', 'c.diner_id', 'd.id')
    .select( 'd.username', 'c.rate' )
    .where(name, '=', 't.name' )
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

function remove(name, operator_id) {
//    const id = findOperatorId(token);

    return db('trucks').where(({operator_id}, '=', 'operator_id') && name).first().del();

}

function update(changes, token){
    const id = findOperatorId(token);
    const name = changes.name 

    return db('trucks').where(('operator_id', '=', id) && {name}).update(changes)
}

function findRatingById(id){
    return db('trucks').where({ id }).first();
}

async function truckRate(rating){
    const [id] = await db('customerTruckRatings').insert(rating)

    return findRatingById(id)
}

function findTruck(search){
    return db('trucks').where(search)
}