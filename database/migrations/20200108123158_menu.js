
exports.up = function(knex) {
  return(knex.schema
    .createTable('menuItems', tbl => {
        tbl.increments();
        tbl.integer('truck_id')
            .unsigned()
            .references('id')
            .inTable('trucks');
        tbl.string('itemName').unique();
        tbl.float('itemPrice')
        tbl.string('itemDescription');
        tbl.float('customerRatingAvg');
    })
    .createTable('itemPhoto', tbl => {
        tbl.integer('menu_id')
            .unsigned()
            .references('id')
            .inTable('menuItems')
        tbl.string('imgUrl')
    })
    .createTable('customerItemRatings', tbl => {
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
            .references('id')
            .inTable('trucks');
        tbl.string('currentLocation');
        tbl.string('currentDepartureTime');
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
    .dropTableIfExists('customerItemRatings')
    .dropTableIfExists('currentLocation')
    .dropTableIfExists('nextLocation')
    .dropTableIfExists('itemPhoto') 
    .dropTableIfExists('menuItems')
    )
};
