
exports.seed = function(knex) {
  return knex('instruction').insert([
    { id: 1,
      description: 'Let butter come to room temperature (20 minutes)',
      step: 1,
      recipe_id: 1
    },
    { id: 2,
      description: 'Mix butter and sugar in large mixing bowl',
      step: 2,
      recipe_id: 1
    },
    { id: 3,
      description: 'Whip butter and sugar with stand mixer',
      step: 3,
      recipe_id: 1
    },
    { id: 4,
      description: 'Mix dry ingredients',
      step: 1,
      recipe_id: 2
    },
    { id: 5,
      description: 'Add water',
      step: 2,
      recipe_id: 2
    },
    { id: 6,
      description: 'Mix until combined',
      step: 3,
      recipe_id: 2
    },
    { id: 7,
      description: 'Rest for 4 hours in fridge',
      step: 4,
      recipe_id: 2
    },
    { id: 8,
      description: 'Bake at 350 degrees for 35 minutes',
      step: 5,
      recipe_id: 2
    },
  ]);
};
