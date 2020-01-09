
exports.seed = function(knex) {
      return knex('customerTruckRatings').insert([
        {truck_id: 1, rating: 10},
        {truck_id: 1, rating: 8},
        {truck_id: 1, rating: 9},
        {truck_id: 2, rating: 10},
        {truck_id: 2, rating: 7},
        {truck_id: 2, rating: 8}
      ]);
};
