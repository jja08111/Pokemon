import React, { Image, ScrollView, Text, View } from 'react-native';
import { useEffect } from 'react';
import { AppStackScreenProps } from '../../navigation/types';
import usePokemonDetailViewModel from './viewModel';
import style from './style';

type Props = AppStackScreenProps<'PokemonDetail'>;

export default function PokemonDetailScreen({ route, navigation }: Props) {
  const { pokemon } = route.params;
  const pokemonName = pokemon.name;
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
    <ScrollView contentContainerStyle={style.root}>
      <Image style={style.image} src={pokemon.imageUrl} />
      <Text>{pokemonDetail?.name}</Text>
    </ScrollView>
  );
}
