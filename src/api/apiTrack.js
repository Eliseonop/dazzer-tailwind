import axios from "axios";
const url = "https://deezerdevs-deezer.p.rapidapi.com/track";

const config = {
  headers: {
    "x-rapidapi-host": process.env.REACT_APP_RAPI_API_HOST,
    "x-rapidapi-key": process.env.REACT_APP_RAPI_API_KEY,
  },
};

export const getApiTrack = async (id) => {
  try {
    const { data } = await axios.get(`${url}/${id}`, config);

    return data;
  } catch (error) {
    throw error;
  }
};
