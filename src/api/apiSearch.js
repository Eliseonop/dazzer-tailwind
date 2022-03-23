import axios from "axios";

const url = "https://deezerdevs-deezer.p.rapidapi.com/search";

export const buscarMusicaName = async (name) => {
  try {
    const nombre = name.split(" ").join("-");
    let options = {
      params: { q: nombre },
      headers: {
        "X-RapidAPI-Host": process.env.REACT_APP_RAPI_API_HOST,
        "X-RapidAPI-Key": process.env.REACT_APP_RAPI_API_KEY,
      },
    };
    const { data } = await axios.get(url, options);

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

// console.log(buscarMusicaName());
