
exports.seed = function(knex) {
      return knex('nextLocation').insert([
        {truck_id: 1, location:"1010 rad rd sun valley, CA, 91933", arrivalTime: "1:00 pm", departureTime: '5:00 pm'}
      ]);
};
