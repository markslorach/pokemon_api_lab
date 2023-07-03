import React, { useState, useEffect } from 'react';
import PokemonList from '../components/PokemonList';
import Pokemon from '../components/Pokemon';

const PokemonContainer = () => {
  const [pokemon, setPokemon] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [favPokemon, setFavPokemon] = useState([]);

  const getPokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then((res) => res.json())
      .then((pokemonData) => setPokemon(pokemonData));
  };

  useEffect(() => {
    getPokemon();
  }, []);

  const updateSelectedPokemon = (poke) => {
    setSelectedPokemon(poke);
  };

  const addToFavorites = (pokemon) => {
    setFavPokemon([...favPokemon, pokemon]);
  };

  return (
    <>
      <h1>Pokedex</h1>
      {pokemon ? (
        <PokemonList
          pokemon={pokemon.results}
          updateSelectedPokemon={updateSelectedPokemon}
          addToFavorites={addToFavorites}
        />
      ) : null}
      <h2>Favorite Pokemon:</h2>
      <ul>
        {favPokemon.map((pokemon) => (
          <li key={pokemon.url}>{pokemon.name}</li>
        ))}
      </ul>
    </>
  );
};

export default PokemonContainer;
