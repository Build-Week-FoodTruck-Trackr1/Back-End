
exports.seed = function(knex) {
      return knex('customerTruckRatings').insert([
        {truck_id: 1, rate: 10, diner_id: 1},
        {truck_id: 1, rate: 8, diner_id: 5},
        {truck_id: 1, rate: 9, diner_id: 4},
        {truck_id: 2, rate: 10, diner_id: 2},
        {truck_id: 2, rate: 7, diner_id: 1},
        {truck_id: 2, rate: 8, diner_id:3}
      ]);
};
