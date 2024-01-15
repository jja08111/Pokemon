import React, {
  Dimensions,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import usePokemonListViewModel from './viewModel';
import PokemonCard from '../../component/PokemonCard';
import style, { CardMargin } from './style';

const NumColumns = 2;

export default function PokemonListScreen() {
  const { pokemons, isLoading, error } = usePokemonListViewModel();
  const { width: windowWidth } = Dimensions.get('window');

  if (error) {
    return (
      <View>
        <Text>There is something wrong!</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={style.root}>
      <FlatList
        style={style.pokemonList}
        data={pokemons}
        numColumns={NumColumns}
        columnWrapperStyle={style.pokemonListColumnWrapper}
        contentContainerStyle={style.pokemonListContentContainer}
        renderItem={(renderItem) => {
          const pokemon = renderItem.item;
          return (
            <PokemonCard
              key={pokemon.name}
              style={{ width: (windowWidth - CardMargin * 3) / NumColumns }}
              pokemon={pokemon}
            />
          );
        }}
      />
      {isLoading && <Text>Loding...</Text>}
    </SafeAreaView>
  );
}
