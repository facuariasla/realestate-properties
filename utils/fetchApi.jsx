import axios from "axios";

//https://rapidapi.com/apidojo/api/bayut/

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": "1e1101b008mshd522dc01104ea46p12dd5ejsnf9101b64ef95",
    },
  });
  
  return data
};
