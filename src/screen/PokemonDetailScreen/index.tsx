import React, { Text, View } from 'react-native';
import { useEffect } from 'react';
import { AppStackScreenProps } from '../../navigation/types';

type Props = AppStackScreenProps<'PokemonDetail'>;

export default function PokemonDetailScreen({ route, navigation }: Props) {
  const pokemonName = route.params.name;

  useEffect(() => {
    navigation.setOptions({ title: pokemonName });
  }, [navigation, pokemonName]);

  return (
    <View>
      <Text>{pokemonName}</Text>
    </View>
  );
}
