
exports.seed = function(knex) {
  return knex('menuItems').insert([
    {id: 1, truck_id:1, itemName:"Hamburger", itemDescription:"All-American Burger", itemPrice: 5.99,  customerRatingAvg: 0},
    {id: 2, truck_id:1, itemName:"Cheese Burger", itemDescription:"All-American Cheese Burger",itemPrice: 6.99, customerRatingAvg: 0}
  ]);
};
