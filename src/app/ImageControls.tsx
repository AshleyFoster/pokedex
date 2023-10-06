import React from 'react';
import {PokemonData} from './PokedexClient';

interface ImageControls {
    sprites: Pick<PokemonData, 'sprites'>;
    currentSprite: string
    chosenSprite: () => {};
}

const ImageControls = ({ sprites, currentSprite, chosenSprite }: ImageControls) => {
    const updateFrontToBackSprite = (currentSprite) => {
        switch(currentSprite) {
            case 'front_female':
                return 'back_female'
            case 'back_female':
                return 'front_female'
            case 'front_shiny_female':
                return 'back_shiny_female'
            case 'back_shiny_femail':
                return 'front_shiny_female'
            case 'front_shiny':
                return 'back_shiny'
            case 'back_shiny':
                return 'front_shiny'
            case 'back_default':
                return 'front_default'
            default:
               return 'back_default' 
        }
    }

    const updateDefaultToShinySprite = (currentSprite) => {
        switch(currentSprite) {
            case 'front_shiny':
                return 'front_default'
            case 'back_shiny':
                return 'back_default'
            case 'front_female':
                return 'front_shiny_female'
            case 'back_female':
                return 'back_shiny_female'
            case 'front_shiny_female':
                return 'front_female'
            case 'back_shiny_female':
                return 'back_female'
            case 'back_default':
                return 'back_shiny'
            default:
               return 'front_shiny' 
        }
    }

    const updateMaleToFemaleSprite = (currentSprite) => {
        switch(currentSprite) {
            case 'front_female':
                return 'front_default'
            case 'back_default':
                return 'back_female'
            case 'back_female':
                return 'back_default'
            case 'front_shiny':
                return 'front_shiny_female'
            case 'back_shiny':
                return 'back_shiny_female'
            case 'front_shiny_female':
                return 'front_shiny'
            case 'back_shiny_female':
                return 'back_shiny'
            default:
                return 'front_female'
        }
    }

    const hasShiny = !!sprites['front_shiny'];
    const hasFemale = !!sprites['front_female'];
    const frontOrBack = currentSprite.includes('front') ? 'back' : 'front';
    const shinyOrRegular = currentSprite.includes('shiny') ? 'default' : 'shiny';
    const maleOrFemale = currentSprite.includes('female') ? 'male' : 'female'

    return (
        <div className="flex flex-1 justify-evenly">
            <button className="bg-yellow-400 hover:bg-yellow-500 p-2 rounded-full" onClick={() => chosenSprite(() => updateFrontToBackSprite(currentSprite))}>{frontOrBack}</button>
            {hasFemale && <button className="bg-yellow-400 hover:bg-yellow-500 p-2 rounded-full" onClick={() => chosenSprite(() => updateMaleToFemaleSprite(currentSprite))}>{maleOrFemale}</button>}
            {hasShiny && <button className="bg-yellow-400 hover:bg-yellow-500 p-2 rounded-full" onClick={() => chosenSprite(() => updateDefaultToShinySprite(currentSprite))}>{shinyOrRegular}</button>}
        </div>
    );
}

export default ImageControls;
