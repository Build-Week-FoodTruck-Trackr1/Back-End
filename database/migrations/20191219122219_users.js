
exports.up = function(knex) {
  return(knex.schema
    .createTable('diner', tbl => {
      tbl.increments();
      tbl.string('type');
      tbl.string('username', 128).unique().notNullable();
      tbl.string('email', 128).notNullable();
      tbl.string('password', 128).notNullable();
      tbl.string('currentLocation').notNullable();
      // tbl.specificType('favoriteTrucks', 'text ARRAY');
    })
    .createTable('operator', tbl => {
      tbl.increments();
      tbl.string('type')
      tbl.string('username', 128).unique().notNullable();
      tbl.string('email', 128).notNullable();
      tbl.string('password', 128).notNullable();
      tbl.string('currentLocation').notNullable();
      // tbl.specificType('trucksOwned', 'text ARRAY');
    })
    .createTable('trucks', tbl => {
      tbl.increments();
      tbl.string('name').notNullable();
      tbl.integer('operator_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('operator')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
      tbl.string('imgUrl');
      tbl.string('cuisineType').notNullable();
      // tbl.string('customerRatings')
      tbl.float('customerRatingAvg');
    })
  )
};

exports.down = function(knex) {
  return(knex.schema
    .dropTableIfExists('diner')
    .dropTableIfExists('operator')
    .dropTableIfExists('trucks')
  )
};
