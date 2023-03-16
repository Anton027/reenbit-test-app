import axios from "axios";
// const BASE_URL = "https://rickandmortyapi.com/api"
// const EPI_URL = "https://rickandmortyapi.com/api/episode"
// axios.defaults.baseURL = "https://rickandmortyapi.com/api/";
// "https://rickandmortyapi.com/api/episode"
//  "https://rickandmortyapi.com/api/character"

export async function getCharactersFetch(page) {
    try {
        const response = await axios.get("https://rickandmortyapi.com/api/character");
        const episodes = await response.data.results
        return episodes;
    } catch (error) {
        console.error(error);
        return;
    }
}

export async function getOneCharacterId(id) {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        
        return response;
    } catch (error) {
        console.error(error);
        return;
    }
}