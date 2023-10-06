import React from 'react';
import { PokemonData } from './PokedexClient';
import PokePicker from './PokePicker';
import PokeListItem from './PokeListItem';

const PokeList = ({ pokemons, choosePokemon }) => {
  return (
    <div className="bg-zinc-100 px-5 py-12 rounded">
    <PokePicker choosePokemon={choosePokemon} />
      <div>
        {pokemons.length > 0 &&
          pokemons.map((pokemon: PokemonData, i: number) => (
            <PokeListItem
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
