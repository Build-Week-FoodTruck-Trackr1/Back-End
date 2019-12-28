const db = require('../database/dbConfig.js');
const atob = require('atob');
module.exports = {
    getTrucksOwned
};

function getTrucksOwned(operator_id) {
    const [,payload] = operator_id.split('.')
    const [id] =atob(payload)
    
    const realId = id
    console.log(realId)
    db('trucks as t').where('t.operator_id', '=', operator_id);
}