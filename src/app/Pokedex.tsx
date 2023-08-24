'use client'

import React from 'react';
import Sprite from './Sprite';

const Pokedex = ({ chosenPokemon }) => {
    return (
        <div className="p-14 grow bg-red-600" >
            <Sprite sprites={chosenPokemon.sprites} />
            <span>
            <h1 className="py-12">{chosenPokemon.name}</h1>
            <h1>{chosenPokemon.id}</h1>
            </span>
            <button>Back</button>
            <button>Female</button>
            <button>Shiny</button>
        </div>
    );
}

export default Pokedex;
