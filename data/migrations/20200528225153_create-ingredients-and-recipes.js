
exports.up = function(knex) {
  return (
    knex.schema
      .createTable('ingredient', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable().unique();
      })
      .createTable('recipe', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable();
      })
      .createTable('instruction', tbl => {
        tbl.increments();
        tbl.string('description', 255).notNullable();
        // I wonder if there is a way for this to happen automatically...
        // Like if I delete a instruction, I have to dencrement the steps
        // of all the following steps. And what about inserting steps?
        // Oh well.
        tbl.integer('step', 255).unsigned().notNullable();
        tbl.integer('recipe_id', 255)
          .unsigned()
          .notNullable()
          .references('recipe.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
      })
      .createTable('ingredient_recipe', tbl => {
        tbl.increments();
        tbl.integer('recipe_id', 255)
          .unsigned()
          .notNullable()
          .references('recipe.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
        tbl.integer('ingredient_id', 255)
          .unsigned()
          .notNullable()
          .references('ingredient.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
        tbl.float('quantity').notNullable();
        tbl.string('unit', 255).notNullable();
      })
  );
};

exports.down = function(knex) {
  return (
    knex.schema
      .dropTableIfExists('ingredient')
      .dropTableIfExists('recipe')
      .dropTableIfExists('instruction')
      .dropTableIfExists('ingredient_recipe')
  );
};
