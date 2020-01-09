
exports.seed = function(knex) {
      return knex('trucksOwned').insert([
        {operator_id: 1, truck_id:1},
        {operator_id:1, truck_id:2},
        {operator_id:2, truck_id:3},
        {operator_id:2, truck_id:4},
        {operator_id:3, truck_id:5},
        {operator_id:3, truck_id:6}
      ]);
};
