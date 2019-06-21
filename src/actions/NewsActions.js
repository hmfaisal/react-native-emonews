import axios from "axios";
import { FETCH_NEWS } from "./types";

const API_KEY = "apiKey=7342d621234e45ea9375cbd48efb6f8c";
const URL = "https://newsapi.org/v2/everything?";

export const fetchNews = () => async (dispatch, getState) => {
  const category = getState().category;
  const country = getState().country;
  let categoryArr = {};
  const categoryKeys = Object.keys(category);
  const countryKeys = Object.keys(country);

  for (let i = 0; i < categoryKeys.length; i++) {
    categoryArr[categoryKeys[i]] = [];
    let category = categoryKeys[i].substring( categoryKeys[i].indexOf( '(' ) + 1, categoryKeys[i].indexOf( ')' ) );
    for (let j = 0; j < countryKeys.length; j++) {
      let country = countryKeys[j].substring( countryKeys[j].indexOf( '(' ) + 1, countryKeys[j].indexOf( ')' ) );
      try {
        let { data } = await axios.get(
          `${URL}${API_KEY}&q=${category}&language=${
            country}&pageSize=10&sortBy=publishedAt
          `
        );
        categoryArr[categoryKeys[i]] = [
          ...categoryArr[categoryKeys[i]],
          ...data.articles
        ];
      } catch (err) {
        console.log(err);
      }
    }
  }

  dispatch({ type: FETCH_NEWS, payload: categoryArr });
};
