import React, {useState} from "react";
import { PokemonData } from "./PokedexClient";

interface PokePreview {
    pokemon: PokemonData;
    choosePokemon:  (number: number) => void;
    i: number;
}

const PokePreview = ({ pokemon, choosePokemon, i }: PokePreview) => {
    const name = pokemon.name

    return (
        <div className="text-black" onClick={() => choosePokemon(i+1)} style={{display: "block"}}>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`}></img>
            <h2>{name}</h2>
        </div>
    );
}

export default PokePreview;
