
exports.seed = function(knex) {
      return knex('currentLocation').insert([
        {truck_id: 1, currentLocation: "1234 louie lane ashbury height, CA, 99211", currentDepartureTime:"1:00 pm"},
        {truck_id: 2, currentLocation: "1234 louie lane ashbury height, CA, 99211", currentDepartureTime:"12:30 pm"}
      ]);
};
