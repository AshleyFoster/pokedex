import React from 'react';
import { PokemonData } from './PokedexClient';
import PokePicker from './PokePicker';
import PokePreview from './PokePreview';

const PokeList = ({ pokemons, choosePokemon }) => {
  return (
    <div className="bg-zinc-100 px-5 py-12 rounded">
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
