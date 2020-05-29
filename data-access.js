const db = require('./data/db-config.js');

async function getRecipes() {
  return db('recipe');
}

async function getShoppingList(recipe_id) {
  return db('recipe AS r')
    .join('ingredient_recipe AS ir', 'r.id', 'ir.recipe_id')
    .join('ingredient AS i', 'i.id', 'ir.ingredient_id')
    .where('r.id', recipe_id)
    .select('i.name', 'ir.quantity', 'ir.unit');
}

async function getInstructions(recipe_id) {
  return 1;
}

// async function findSteps(id) {
//   const steps = await db('steps')
//     .join('schemes', 'steps.scheme_id', 'schemes.id')
//     .where({scheme_id: id})
//     .orderBy('step_number')
//     .select('steps.id',
//             'schemes.scheme_name',
//             'steps.step_number',
//             'steps.instructions');
//   return steps;
// }



module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};
