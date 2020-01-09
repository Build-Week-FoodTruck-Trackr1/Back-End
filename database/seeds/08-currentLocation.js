
exports.seed = function(knex) {
      return knex('currentLocation').insert([
        {truck_id: 1, }
      ]);
};
