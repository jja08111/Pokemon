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
import { AppStackScreenProps } from '../../navigation/types';

const NumColumns = 2;

type Props = AppStackScreenProps<'PokemonList'>;

export default function PokemonListScreen({ navigation }: Props) {
  const { pokemons, isLoading, error, fetchNextPokemons } =
    usePokemonListViewModel();
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
        onEndReached={fetchNextPokemons}
        numColumns={NumColumns}
        onEndReachedThreshold={0.5}
        keyExtractor={(pokemon) => pokemon.name}
        columnWrapperStyle={style.pokemonListColumnWrapper}
        contentContainerStyle={style.pokemonListContentContainer}
        renderItem={(renderItem) => {
          const pokemon = renderItem.item;
          return (
            <PokemonCard
              key={pokemon.name}
              style={{ width: (windowWidth - CardMargin * 3) / NumColumns }}
              pokemon={pokemon}
              onPress={() => navigation.navigate('PokemonDetail', { pokemon })}
            />
          );
        }}
      />
      {isLoading && <Text>Loding...</Text>}
    </SafeAreaView>
  );
}
