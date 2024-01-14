import React, { FlatList, Text, View } from 'react-native';
import usePokemonListViewModel from './viewModel';
import PokemonCard from '../../component/PokemonCard';

export default function PokemonListScreen() {
  const { pokemons, isLoading, error } = usePokemonListViewModel();

  if (error) {
    return (
      <View>
        <Text>There is something wrong!</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={pokemons}
        renderItem={(renderItem) => {
          const pokemon = renderItem.item;
          return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
        }}
      />
      {isLoading && <Text>Loding...</Text>}
    </View>
  );
}
