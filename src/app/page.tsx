"use client";

import React, { useEffect, useState } from "react";
import PokeList from "./PokeList";
import { PokedexClient } from "./PokedexClient";
import Pokedex from "./Pokedex";

export default function Home() {
  const pokedex = new PokedexClient();
  const [pokemons, setPokemons] = useState([]);
  const [chosenPokemon, setChosenPokemon] = useState(null);

  useEffect(() => {
    pokedex.all().then((pokemons) => {
      setPokemons(pokemons.results);
    });
  }, []);

  const fetchPokemon = (number: number) => {
    pokedex.getData(number).then((result) => {
      setChosenPokemon(result);
    });
  };

  return (
    <main className="flex flex-row items-start bg-red-600 h-full">
      <div className="overflow-y-scroll max-h-full">
        <PokeList pokemons={pokemons} choosePokemon={fetchPokemon} />
      </div>
      {chosenPokemon && <Pokedex chosenPokemon={chosenPokemon} />}
    </main>
  );
}
