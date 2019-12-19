
exports.up = function(knex) {
  return(knex.schema
    .createTable('diners', tbl => {
      tbl.increments();
      tbl.string('type').defaultTo('diner');
      tbl.string('username', 128).unique().notNullable();
      tbl.string('email', 128).notNullable();
      tbl.string('password', 128).notNullable();
      tbl.string('currentLocation').notNullable();
      tbl.specificType('favoriteTrucks', 'text ARRAY').notNullable();
    })
    .createTable('operators', tbl => {
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
    .dropTableIfExists('diners')
    .dropTableIfExists('operators')
  )
};
