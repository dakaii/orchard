import axios from 'axios';

const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = 'AIzaSyA43h4UzUNI3zVsnxK_nx6WIiWzoGnOXvY';

export const videoAPI = async (keyword) => {
  if (!API_KEY) {
    throw new Error('Youtube Search expected key, received undefined');
  }
  const url = `https://www.googleapis.com/youtube/v3/search?q=${keyword}&part=snippet&key=${API_KEY}`;
  return await axios.get(url)
    .then(function(response) {
      return {
        type: GET_VIDEO_SUCCESS,
        payload: response.data.items
      };
    }).catch(function(error) {
      return {
        type: GET_VIDEO_FAILURE,
        payload: error
      };
    });
};

export const GET_VIDEO_SUCCESS = 'GET_VIDEO_SUCCESS';
export const GET_VIDEO_FAILURE = 'GET_VIDEO_FAILURE';
