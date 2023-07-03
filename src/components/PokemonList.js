import React from 'react'
import Pokemon from './Pokemon'

const PokemonList = ({pokemon, updateSelectedPokemon}) => {
  
    return (
        <>
        <h1>List of Pokemon</h1>
        
        {pokemon.map((pokemon) => {
            return <Pokemon url={pokemon.url}/>
        })}
      
        </>
    )


}



export default PokemonList;