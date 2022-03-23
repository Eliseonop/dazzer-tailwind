import axios from "axios";

const url = "https://deezerdevs-deezer.p.rapidapi.com/search";

export const buscarMusicaName = async (name) => {
  console.log(name);
  try {
    let options = {
      params: { q: name },
      headers: {
        "X-RapidAPI-Host": process.env.RAPI_API_HOST,
        "X-RapidAPI-Key": process.env.RAPI_API_KEY,
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
