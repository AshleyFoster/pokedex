import React, {useState} from "react";
import { PokemonData } from "./PokedexClient";

interface PokePreview {
    pokemon: PokemonData;
    choosePokemon:  (number: number) => void;
    i: number;
}

const PokePreview = ({ pokemon, choosePokemon, i }: PokePreview) => {
    const number = i + 1;
    let formattedNumber;

    if (number < 10) {
        formattedNumber = `00${number}`;
    } else if (number < 100) {
        formattedNumber = `0${number}`;
    } else {
        formattedNumber = number;
    }
    return (
        <div className="border-b border-slate-200 flex hover:bg-zinc-200 items-center justify-evenly text-black" onClick={() => choosePokemon(i+1)}>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`}></img>
            <span className="rounded-full">
                <h2 className="bg-red-400 p-1">No. {formattedNumber}</h2>
                <h2 className="bg-white p-1"> {pokemon.name}</h2>
            </span>
        </div>
    );
}

export default PokePreview;
