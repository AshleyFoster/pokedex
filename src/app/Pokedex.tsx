'use client'

import React, {useState} from 'react';
import Sprite from './Sprite';
import ImageControls from './ImageControls';

const Pokedex = ({ chosenPokemon }) => {
    const [chosenSprite, setChosenSprite] = useState('front_default')

    const updateChosenSprite = (sprite: string) => {
        setChosenSprite(sprite);
    }
    return (
        <div className="bg-red-600 p-14" >
            <Sprite sprites={chosenPokemon.sprites} chosenSprite={chosenSprite} />
            <span>
            <h1 className="py-12">{chosenPokemon.name}</h1>
            <h1>{chosenPokemon.id}</h1>
            </span>
            <ImageControls sprites={chosenPokemon.sprites} currentSprite={chosenSprite} chosenSprite={updateChosenSprite}/>
        </div>
    );
}

export default Pokedex;
