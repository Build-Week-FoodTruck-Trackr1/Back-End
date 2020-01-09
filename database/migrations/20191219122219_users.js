
exports.up = function(knex) {
  return(knex.schema
    .createTable('operator', tbl => {
      tbl.increments();
      tbl.string('type')
      tbl.string('username', 128).unique().notNullable();
      tbl.string('email', 128).notNullable();
      tbl.string('password', 128).notNullable();
      tbl.integer('currentLocation');
    })
    .createTable('diner', tbl => {
      tbl.increments();
      tbl.string('type');
      tbl.string('username', 128).unique().notNullable();
      tbl.string('email', 128).notNullable();
      tbl.string('password', 128).notNullable();
      tbl.string('currentLocation').notNullable();
    })
    .createTable('favoriteTrucks', tbl => {
      tbl.integer('diner_id')
        .unsigned()
        .references('id')
        .inTable('diner');
      tbl.string('favoriteTruck')
    })
    .createTable('trucks', tbl => {
      tbl.increments();
      tbl.string('name').notNullable();
      tbl.integer('operator_id').notNullable();
      tbl.string('imgUrl');
      tbl.string('cuisineType').notNullable();
      tbl.float('customerRatingAvg');
    })
    .createTable('trucksOwned', tbl => {
      tbl.integer('operator_id')
        .unsigned()
        .references('id')
        .inTable('operator')
      tbl.integer('truck_id')
        .unsigned()
        .references('id')
        .inTable('trucks')
    })
    .createTable('customerTruckRatings', tbl => {
      tbl.integer('truck_id')
        .unsigned()
        .references('id')
        .inTable('trucks')
      tbl.integer('rate')
      tbl.integer('diner_id')
        .unsigned()
        .references('id')
        .inTable('diner')
    })
  )
};

exports.down = function(knex) {
  return(knex.schema
    .dropTableIfExists('favoriteTrucks')
    .dropTableIfExists('customerTruckRatings')
    .dropTableIfExists('trucksOwned')
    .dropTableIfExists('trucks')
    .dropTableIfExists('diner')
    .dropTableIfExists('operator')
  )
};
