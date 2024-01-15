import React, { Text, View } from 'react-native';
import { useEffect } from 'react';
import { AppStackScreenProps } from '../../navigation/types';
import usePokemonDetailViewModel from './viewModel';

type Props = AppStackScreenProps<'PokemonDetail'>;

export default function PokemonDetailScreen({ route, navigation }: Props) {
  const pokemonName = route.params.name;
  const { pokemonDetail, isLoading, error } =
    usePokemonDetailViewModel(pokemonName);

  useEffect(() => {
    navigation.setOptions({ title: pokemonName });
  }, [navigation, pokemonName]);

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>There is something wrong!</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>{pokemonDetail?.name}</Text>
    </View>
  );
}
