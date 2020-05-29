
exports.seed = function(knex) {
  return knex('ingredient').insert([
    {id: 1, name: 'butter'},
    {id: 2, name: 'sugar'},
    {id: 3, name: 'flour'},
    {id: 4, name: 'yeast'},
    {id: 5, name: 'salt'},
    {id: 6, name: 'water'}
  ]);
};
