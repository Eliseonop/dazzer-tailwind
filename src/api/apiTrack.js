import axios from "axios";
const url = "https://deezerdevs-deezer.p.rapidapi.com/track";

const config = {
  headers: {
    "x-rapidapi-host": process.env.RAPI_API_HOST,
    "x-rapidapi-key": process.env.RAPI_API_KEY,
  },
};

export const getApiTrack = async (id) => {
  try {
    const { data } = await axios.get(`${url}/${id}`, config);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};
