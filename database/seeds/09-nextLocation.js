
exports.seed = function(knex) {
      return knex('nextLocation').insert([
        {truck_id: 1, location:"1010 rad rd sun valley, CA, 91933", arrivalTime: "1:30 pm", departureTime: '10:00 pm'},
        {truck_id: 2, location:"1010 rad rd sun valley, CA, 91933", arrivalTime: "2:00 pm", departureTime: '11:00 pm'},
        {truck_id: 3, location:"1010 rad rd sun valley, CA, 91933", arrivalTime: "1:50 pm", departureTime: '10:00 pm'},
        {truck_id: 4, location:"1010 rad rd sun valley, CA, 91933", arrivalTime: "3:30 pm", departureTime: '11:00 pm'},
        {truck_id: 5, location:"1010 rad rd sun valley, CA, 91933", arrivalTime: "1:30 pm", departureTime: '10:00 pm'},
        {truck_id: 6, location:"1010 rad rd sun valley, CA, 91933", arrivalTime: "5:00 pm", departureTime: '12:00 am'}
      ]);
};
