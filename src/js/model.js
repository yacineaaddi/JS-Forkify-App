import { aync } from 'regenerator-runtime';
import { API_URL } from './config';
import { getJSON } from './helpers';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
  },
};

export const loadrecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id}`);
    /*const data = await getJSON(
      'http://forkify-api.herokuapp.com/api/v2/recipes/664c8f193e7aa067e94e866f'
    );*/
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

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await getJSON(`${API_URL}?search=${query}`);
    console.log(data);

    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.id,
        image: rec.image_url,
      };
    });
    console.log(state.search.results);
  } catch (err) {
    console.log(err);
    throw err;
  }
};
