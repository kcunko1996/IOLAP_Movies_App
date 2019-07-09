exports.up = function(knex) {
  return knex.schema.createTable('movies', (table) => {
    table.increments();
    table.string('name').notNullable().unique();
    table.string('genre').notNullable();
    table.integer('rating').notNullable();
    table.string('Year').notNullable();
    table.string('Time').notNullable();
    table.text('Desc').notNullable();
    table.string('Language').notNullable();
    table.string('PictureLink').notNullable();
    table.string('BackgroundLink').notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('movies');
};
