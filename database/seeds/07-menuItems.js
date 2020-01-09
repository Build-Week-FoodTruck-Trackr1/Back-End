
exports.seed = function(knex) {
  return knex('menuItems').insert([
    {id: 1, truck_id:1, itemName:"Hamburger", itemDescription:"All-American Burger", customerRatingAvg: 0},
    {id: 2, truck_id:1, itemName:"Cheese Burger", itemDescription:"All-American Cheese Burger", customerRatingAvg: 0}
  ]);
};
