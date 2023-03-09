const axios = require('axios').default;
// const BASE_URL = "https://rickandmortyapi.com/api"
// const EPI_URL = "https://rickandmortyapi.com/api/episode"
axios.defaults.baseURL = "https://rickandmortyapi.com/api"
// "https://rickandmortyapi.com/api/episode"
//  "https://rickandmortyapi.com/api/character"

export async function getEpisodeFetch() {
    try {
        const response = await axios.get();
        console.log(response);
        // const episode = await response.data;
        // return episode;
    } catch (error) {
        console.error(error);
        return;
    }
}