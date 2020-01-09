
exports.seed = function(knex) {
      return knex('trucks').insert([
        {id: 1, operator_id: 1, name:'Star Spangled Burger', imgUrl:'https://unsplash.com/photos/geeZzrAXyMQ', cuisineType:'american', customerRatingAvg: 0},
        {id: 2, operator_id: 1, name:'Koala Express', imgUrl:'https://unsplash.com/photos/-eeAvufLf9A', cuisineType:'asian', customerRatingAvg: 0},
        {id: 3, operator_id: 2, name:'Koko Chicken', imgUrl:'https://unsplash.com/photos/-4K1IMX_EQc', cuisineType:'mexican', customerRatingAvg: 0},
        {id: 4, operator_id: 2, name:'Korean Bbq', imgUrl:'https://unsplash.com/photos/o58cEDAnPB8', cuisineType:'asian', customerRatingAvg: 0},
        {id: 5, operator_id: 3, name:'Da Juice', imgUrl:'https://unsplash.com/photos/VFdqatkU8rk', cuisineType:'juicer', customerRatingAvg: 0},
        {id: 6, operator_id: 3, name:'Halale', imgUrl:'https://unsplash.com/photos/FFcMeEEsems', cuisineType:'mediterranean', customerRatingAvg: 0}
      ]);
};
