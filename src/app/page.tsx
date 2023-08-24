'use client'

import React, {useEffect, useState} from 'react';
import PokeList from './PokeList';
import {PokedexClient} from './PokedexClient';
import Pokedex from './Pokedex';

export default function Home() {
  const pokedex = new PokedexClient()
  const [pokemons, setPokemons]= useState([])
  const [chosenPokemon, setChosenPokemon] = useState(null)

  useEffect(() => {
    pokedex.all().then(pokemons => {
        setPokemons(pokemons.results)
    })
  }, [])

  const fetchPokemon = (number: number) => {
    pokedex.getData(number).then(result => {
        setChosenPokemon(result)
    })
  }

  // pass chosen pokemon otherwise how t f do u render it?!
  return (
    <main className="p-20 flex flex-row bg-red-600">
       <PokeList pokemons={pokemons} choosePokemon={fetchPokemon} />
       {chosenPokemon && <Pokedex chosenPokemon={chosenPokemon} />}
    </main>
  )
}
