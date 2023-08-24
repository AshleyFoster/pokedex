import React from 'react';
import { PokemonData } from './PokedexClient';
import PokePicker from './PokePicker';
import PokePreview from './PokePreview';

const PokeList = ({ pokemons, choosePokemon }) => {
  return (
    <div className="grow bg-zinc-100 p-12">
    <PokePicker choosePokemon={choosePokemon} />
      <div>
        {pokemons.length > 0 &&
          pokemons.map((pokemon: PokemonData, i: number) => (
            <PokePreview
              key={pokemon.name}
              pokemon={pokemon}
              choosePokemon={choosePokemon}
              i={i}
            />
          ))}
      </div>
    </div>
  );
};

export default PokeList;
