import axios from "axios";

const url = "https://deezerdevs-deezer.p.rapidapi.com/search";

export const buscarMusicaName = async (name) => {
  console.log(name);
  try {
    let options = {
      params: { q: name },
      headers: {
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        "X-RapidAPI-Key": "dcfa1cdcfdmsh91fd95a9752ef5bp147594jsneb236564b0b1",
      },
    };
    const { data } = await axios.get(url, options);
    console.log(data.data);
    return data.data;
  } catch (error) {
    throw error;
  }
};

// console.log(buscarMusicaName());
