import axios from "axios";
const url = "https://deezerdevs-deezer.p.rapidapi.com/track";

const config = {
  headers: {
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    "x-rapidapi-key": "dcfa1cdcfdmsh91fd95a9752ef5bp147594jsneb236564b0b1",
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
