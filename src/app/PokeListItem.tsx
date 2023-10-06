import React from "react";
import { PokemonData } from "./PokedexClient";
import PokemonNumber from "./PokemonNumber";

export interface PokeListItemProps {
    pokemon: PokemonData;
    choosePokemon: (number: number) => void;
    i: number;
}

const PokeListItem = ({ pokemon, choosePokemon, i }: PokeListItemProps) => {
    const number = i + 1;
    return (
        <div className="border-b border-slate-200 flex hover:bg-zinc-200 items-center justify-evenly text-black" onClick={() => choosePokemon(i+1)}>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`}></img>
            <span className="rounded-full">
                <h2 className="bg-red-400 flex p-1">No. <PokemonNumber num={number} /></h2>
                <h2 className="bg-white p-1">{pokemon.name}</h2>
            </span>
        </div>
    );
}

export default PokeListItem;
