// RecipeRepo in the form of:
// {  <RecipeName>: Recipe }
const RecipeRepo = {};
const Ingredients = {};
const MostPopularIngredient = {
  name: '',
  count: 0,
};

class Recipe {
  constructor(name, ingredients) {
    this.name = name;
    this.ingredients = ingredients;
  }
}

const addRecipe = (recipe) => {
  RecipeRepo[recipe.name] = recipe;
  recipe.ingredients.forEach((ingredient) => {
    if (Ingredients[ingredient]) {
      Ingredients[ingredient].push(recipe.name);
    } else {
      Ingredients[ingredient] = [recipe.name];
    }
    if (Ingredients[ingredient].length > MostPopularIngredient.count) {
      MostPopularIngredient.name = ingredient;
      MostPopularIngredient.count = Ingredients[ingredient].length;
    }
  }); 
};

const getRecipiesByIngredient = (ingredient) => {
  return Ingredients[ingredient] || [];
};

const getMostPopularIngredient = () => MostPopularIngredient;

const cake = new Recipe('cake', ['milk', 'flour', 'eggs', 'butter', 'sugar']);
const bread = new Recipe('bread', ['wheat', 'milk']);
addRecipe(cake);
addRecipe(bread);
console.log('Ingredients:', Ingredients);
console.log('MostPopularIngredient:', getMostPopularIngredient());
console.log('getRecipiesByIngredient(\'milk\')', getRecipiesByIngredient('milk'));
