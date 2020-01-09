
exports.up = function(knex) {
  return(knex.schema
    .createTable('menuItems', tbl => {
        tbl.increments();
        tbl.integer('truck_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('trucks');
        tbl.string('itemName').notNullable();
        tbl.string('itemDescription').notNullable();
        tbl.integer('itemPhotos');
        tbl.integer('customerRatings');
        tbl.integer('customerRatingAvg');
        tbl.integer('currentLocation');
        tbl.integer('nextLocation')
    })
    .createTable('customerRatings', tbl => {
        tbl.integer('menu_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('menuItems')
        tbl.float('rating');
    })
    .createTable('currentLocation', tbl => {
        tbl.integer('truck_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('trucks');
        tbl.string('location');
        tbl.string('departureTime');
    })
    .createTable('nextLocation', tbl => {
        tbl.integer('truck_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('trucks');
        tbl.string('location');
        tbl.string('arrivalTime')
        tbl.string('departureTime')
    })
  )
};

exports.down = function(knex) {
  return(knex.schema
    .dropTableIfExists('menuItems')
    .dropTableIfExists('customerRatings')
    .dropTableIfExists('currentLocation')
    .dropTableIfExists('nextLocation') 
    )
};
