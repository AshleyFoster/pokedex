import axios from 'axios';

export type PokemonData = {
    id: number,
    name: string,
    sprites: Map<string, string>,
    [key: string]: any;
}

export class PokedexClient {
    constructor() {
        // api keys, etc
    }

    all() {
        return axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`).then(
            (response) => {
                return response.data
            }
        )
    }

    getData(id: number) {
        return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(
            (response) => {
                return response.data
            }
        )
    }
}
