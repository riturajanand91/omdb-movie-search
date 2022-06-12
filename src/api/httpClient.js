import axios from "axios";

export const fetchApi = async (searchTerm) => {
  const url = "http://www.omdbapi.com/";
  const apiKey = "2fa464a2";
  return await axios
    .get(`${url}?s=${searchTerm}&apikey=${apiKey}`)
  // .then((res) => {
  //   console.log(res);
  // })
  // .catch((e) => {
  //   console.log(e);
  // })
};
