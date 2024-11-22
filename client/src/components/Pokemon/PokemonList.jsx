
import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonList = ({pokemons}) => {
  // const pokemonData = [
  //   { name: 'Pikachu', desc: 'Electric-type Pokémon. Known for its thunderbolt!' },
  //   { name: 'Charmander', desc: 'Fire-type Pokémon. Has a fiery tail!' },
  //   { name: 'Bulbasaur', desc: 'Grass/Poison-type Pokémon. Loves sunlight!' },
  // ];

  return (
    <div className="text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {pokemons.map((pokemon, index) => (
        <PokemonCard key={`${pokemon.name}+ ${index}`} name={pokemon.name} />
      ))}
    </div>
  );
};

export default PokemonList;
