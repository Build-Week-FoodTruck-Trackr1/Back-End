
exports.up = function(knex) {
  return(knex.schema
    .createTable('diner', tbl => {
      tbl.increments();
      tbl.string('type');
      tbl.string('username', 128).unique().notNullable();
      tbl.string('email', 128).notNullable();
      tbl.string('password', 128).notNullable();
      tbl.string('currentLocation').notNullable();
      tbl.integer('favoriteTrucks');
    })
    .createTable('favoriteTrucks', tbl => {
      tbl.integer('diner_id')
        .unsigned()
        .references('id')
        .inTable('diner');
      tbl.string('favoriteTruck')
    })
    .createTable('operator', tbl => {
      tbl.increments();
      tbl.string('type')
      tbl.string('username', 128).unique().notNullable();
      tbl.string('email', 128).notNullable();
      tbl.string('password', 128).notNullable();
      tbl.string('currentLocation').notNullable();
      tbl.integer('trucksOwned');
    })
    .createTable('trucks', tbl => {
      tbl.increments();
      tbl.string('name').notNullable();
      tbl.integer('operator_id').notNullable();
      tbl.string('imgUrl');
      tbl.string('cuisineType').notNullable();
      tbl.integer('customerRatings')
      tbl.float('customerRatingAvg');
    })
    .createTable('trucksOwned', tbl => {
      tbl.integer('operator_id')
        .unsigned()
        .references('id')
        .inTable('operator')
      tbl.integer('trucks')
        .unsigned()
        .references('id')
        .inTable('trucks')
    })
    .createTable('customerRatings', tbl => {
      tbl.integer('trucks_id')
        .unsigned()
        .references('id')
        .inTable('trucks')
    })
  )
};

exports.down = function(knex) {
  return(knex.schema
    .dropTableIfExists('diner')
    .dropTableIfExists('operator')
    .dropTableIfExists('trucks')
    .dropTableIfExists('favoriteTrucks')
    .dropTableIfExists('customerRatings')
    .dropTableIfExists('trucksOwned')
  )
};
