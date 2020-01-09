
exports.seed = function(knex) {
      return knex('favoriteTrucks').insert([
        {diner_id: 1, favoriteTruck:"Star Spangled Burger"},
        {diner_id: 1, favoriteTruck:"Koko Chicken"},
        {diner_id: 2, favoriteTruck:"Star Spangled Burger"},
        {diner_id: 2, favoriteTruck:"Halale"},
        {diner_id: 3, favoriteTruck:"Da Juice"},
        {diner_id: 3, favoriteTruck:"Korean Bbq"}
      ]);
};
