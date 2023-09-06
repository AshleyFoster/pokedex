import axios from 'axios';

export type PokemonData = {
    id: number,
    name: string,
    sprites: Map<string, string>,
    [key: string]: any;
}

export class PokedexClient {
    baseUrl: string;

    constructor() {
        this.baseUrl = 'https://pokeapi.co/api/v2/';
    }

    all() {
        return axios.get<PokemonData[]>(`${this.baseUrl}pokemon?limit=151`).then(
            (response) => {
                return response.data
            }
        )
    }

    getData(id: number) {
        return axios.get<PokemonData>(`${this.baseUrl}pokemon/${id}`).then(
            (response) => {
                return response.data
            }
        )
    }
}
