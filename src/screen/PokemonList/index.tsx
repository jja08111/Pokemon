import React, { FlatList } from 'react-native';
import usePokemonListViewModel from './viewModel';
import PokemonCard from '../../component/PokemonCard';

export default function PokemonListScreen() {
  const { pokemons } = usePokemonListViewModel();

  return (
    <FlatList
      data={pokemons ?? []}
      renderItem={(renderItem) => {
        const pokemon = renderItem.item;
        return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
      }}
    />
  );
}
