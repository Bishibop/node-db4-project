const recipeBook = require('./data-access.js');

recipeBook.getShoppingList(2).then(value => console.log(value));
