
exports.seed = function(knex) {
      return knex('currentLocation').insert([
        {truck_id: 1, currentLocation: "1234 louie lane ashbury height, CA, 99211", currentDepartureTime:"1:00 pm"},
        {truck_id: 2, currentLocation: "1234 louie lane ashbury height, CA, 99211", currentDepartureTime:"1:30 pm"},
        {truck_id: 3, currentLocation: "1234 louie lane ashbury height, CA, 99211", currentDepartureTime:"1:20 pm"},
        {truck_id: 4, currentLocation: "1234 louie lane ashbury height, CA, 99211", currentDepartureTime:"2:30 pm"},
        {truck_id: 5, currentLocation: "1234 louie lane ashbury height, CA, 99211", currentDepartureTime:"1:00 pm"},
        {truck_id: 6, currentLocation: "1234 louie lane ashbury height, CA, 99211", currentDepartureTime:"4:30 pm"}      
      ]);
};
