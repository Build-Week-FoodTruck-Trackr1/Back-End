
exports.seed = function(knex) {
      return knex('trucks').insert([
        {id: 1, operator_id: 1, name:'Star Spangled Burger', imgUrl:'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2551&q=80', cuisineType:'american', customerRatingAvg: 0},
        {id: 2, operator_id: 1, name:'Koala Express', imgUrl:'https://images.unsplash.com/photo-1567129937968-cdad8f07e2f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=945&q=80', cuisineType:'asian', customerRatingAvg: 0},
        {id: 3, operator_id: 2, name:'Koko Chicken', imgUrl:'https://images.unsplash.com/photo-1557818471-8a140ea11868?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80', cuisineType:'mexican', customerRatingAvg: 0},
        {id: 4, operator_id: 2, name:'Korean Bbq', imgUrl:'https://images.unsplash.com/reserve/DHHQbqc0RrWVf0uDNe5E_The%20Litte%20Cafe.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2048&q=80', cuisineType:'asian', customerRatingAvg: 0},
        {id: 5, operator_id: 3, name:'Da Juice', imgUrl:'https://images.unsplash.com/photo-1528075297343-eba2ae8bfed3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80', cuisineType:'juicer', customerRatingAvg: 0},
        {id: 6, operator_id: 3, name:'Halale', imgUrl:'https://images.unsplash.com/photo-1547620917-786ebcbc55af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80', cuisineType:'mediterranean', customerRatingAvg: 0}
      ]);
};
