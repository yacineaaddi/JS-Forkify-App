import { aync } from 'regenerator-runtime';
import { API_URL } from './config';
import { getJSON } from './helpers';

export const state = {
  recipe: {},
};

export const loadrecipe = async function (id) {
  try {
    /*const data = await getJSON(`${API_URL}/${id}`);*/
    const data = await getJSON(
      'http://forkify-api.herokuapp.com/api/v2/recipes/664c8f193e7aa067e94e897baaa'
    );
    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.id,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (err) {
    throw err;
  }
};
