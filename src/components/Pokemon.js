import React, { useState, useEffect } from 'react';

const Pokemon = ({ url }) => {
  const [pokemon, setPokemon] = useState(null);

  const getPokemon = () => {
    fetch(url)
      .then(res => res.json())
      .then(pokemonData => setPokemon(pokemonData));
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <>
      {pokemon && (
        <>
          <img src={pokemon.sprites.front_default} alt="Pokemon" />
          <p>
            <b>Name:</b> {pokemon.name}
          </p>
          <p>
            <b>Height:</b> {pokemon.height} Foot
          </p>
        </>
      )}
    </>
  );
};

export default Pokemon;
