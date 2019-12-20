
exports.up = function(knex) {
  return(knex.schema
    .createTable('diner', tbl => {
      tbl.increments();
      tbl.string('type');
      tbl.string('username', 128).unique().notNullable();
      tbl.string('email', 128).notNullable();
      tbl.string('password', 128).notNullable();
      tbl.string('currentLocation').notNullable();
      tbl.specificType('favoriteTrucks', 'text ARRAY');
    })
    .createTable('operator', tbl => {
      tbl.increments();
      tbl.string('type').defaultTo('operator')
      tbl.string('username', 128).unique().notNullable();
      tbl.string('password', 128).notNullable();
      tbl.specificType('trucksOwned', 'text ARRAY').notNullable();
    })
  )
};

exports.down = function(knex) {
  return(knex.schema
    .dropTableIfExists('diner')
    .dropTableIfExists('operator')
  )
};