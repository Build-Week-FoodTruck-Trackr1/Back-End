
exports.up = function(knex) {
  return(knex.schema
    .createTable('diner', tbl => {
      tbl.increments();
      tbl.string('type');
      tbl.string('username', 128).unique().notNullable();
      tbl.string('email', 128).notNullable();
      tbl.string('password', 128).notNullable();
      tbl.string('currentLocation').notNullable();
      tbl.string('favoriteTrucks');
    })
    .createTable('operator', tbl => {
      tbl.increments();
      tbl.string('type')
      tbl.string('username', 128).unique().notNullable();
      tbl.string('email', 128).notNullable();
      tbl.string('password', 128).notNullable();
      tbl.string('currentLocation').notNullable();
      tbl.string('trucksOwned');
    })
    .createTable('trucks', tbl => {
      tbl.increments();
      tbl.string('name').notNullable();
      tbl.integer('operator_id');
      tbl.string('imgUrl');
      tbl.string('cuisineType').notNullable();
      // tbl.string('customerRatings')
      tbl.float('customerRatingAvg');
    })
    .createTable('favorites', tbl => {
      tbl.integer('diner_id')
      tbl.integer('truck_id')
    })
  )
};

exports.down = function(knex) {
  return(knex.schema
    .dropTableIfExists('diner')
    .dropTableIfExists('operator')
    .dropTableIfExists('trucks')
    .dropTableIfExists('favorites')
  )
};
