
exports.seed = function(knex) {
  return knex('menuItems').insert([
    {id: 1, truck_id:1, itemName:"Hamburger", itemDescription:"All-American Burger", itemPrice: 5.99,  customerRatingAvg: 10},
    {id: 2, truck_id:1, itemName:"Cheese Burger", itemDescription:"All-American Cheese Burger",itemPrice: 6.99, customerRatingAvg: 8},
    {id: 3, truck_id:1, itemName:"American Fries", itemDescription:"All-American Fries", itemPrice: 2.00,  customerRatingAvg: 7},
    {id: 4, truck_id:2, itemName:"Orange Chicken", itemDescription:"Sweet Marinated Orange Chicken",itemPrice: 8.75, customerRatingAvg: 9},
    {id: 5, truck_id:2, itemName:"Mongolian Beef with Rice", itemDescription:"Sauteed Mongolian Styled Beef", itemPrice: 10.99,  customerRatingAvg: 10},
    {id: 6, truck_id:2, itemName:"Shrimp Fried Rice", itemDescription:"Rice that was fried by a Shrimp",itemPrice: 5.99, customerRatingAvg: 8},
    {id: 7, truck_id:3, itemName:"Chicken Flavored Duck", itemDescription:"Duck that's almost like a chicken but is not", itemPrice: 15.99,  customerRatingAvg: 8},
    {id: 8, truck_id:3, itemName:"Impossible Chicken Sandwich", itemDescription:"Chicken Sandwich that is not Chicken",itemPrice: 8.99, customerRatingAvg: -100},
    {id: 9, truck_id:3, itemName:"Medium Rare Chicken", itemDescription:"'Not raw, not Cooked but somewhere in the middle' cooked chicken", itemPrice: 9.99,  customerRatingAvg: 10},
    {id: 10, truck_id:4, itemName:"Japanse BBQ", itemDescription:"The signiture Japanese BBQ that are made by korean people",itemPrice: 20.99, customerRatingAvg: 10},
    {id: 11, truck_id:4, itemName:"Korean Brisket over Rice", itemDescription:"Thin sliced Beef cooked to perfection", itemPrice: 12.50,  customerRatingAvg: 7},
    {id: 12, truck_id:4, itemName:"Bibimbap ", itemDescription:"The Famous Korean Dish. Served with Bi and bim and bap",itemPrice: 6.99, customerRatingAvg: 0},
    {id: 13, truck_id:5, itemName:"Roidz", itemDescription:"a GREAT way to start your work out", itemPrice: 100.00,  customerRatingAvg: 100},
    {id: 14, truck_id:5, itemName:"Kale", itemDescription:"Something healthy.(JUST KALE)",itemPrice: 4.99, customerRatingAvg: 5},
    {id: 15, truck_id:6, itemName:"Gyro", itemDescription:"Very similar to halal guys just not as good but its almost there", itemPrice: 15.99,  customerRatingAvg: -10},
    {id: 16, truck_id:6, itemName:"Gyro Burrito", itemDescription:"Identical to Gyro just in a burrito",itemPrice: 16.99, customerRatingAvg: 10},
  ]);
};
