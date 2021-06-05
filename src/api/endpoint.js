import CONFIG from "./config";
import axios from "axios";

export const newsApiBusiness = async () => {
  let url = `https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=7900c016c15d400ba3f750a23ec10bcc&page=1`;
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    });
};
