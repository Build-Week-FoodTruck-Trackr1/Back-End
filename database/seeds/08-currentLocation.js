
exports.seed = function(knex) {
      return knex('currentLocation').insert([
        {truck_id: 1, location: "1234 louie lane ashbury height, CA, 99211", departureTime:"1:00 pm"},
        {truck_id: 2, location: "1234 louie lane ashbury height, CA, 99211", departureTime:"12:30 pm"}
      ]);
};
