import React from 'react';
import { Image, Text, View } from 'react-native';
import Pokemon from '../../model/Pokemon';

interface Props {
  pokemon: Pokemon;
}

export default function PokemonCard(props: Props) {
  const { pokemon } = props;
  return (
    <View>
      <Text>{pokemon.name}</Text>
      <Image src={pokemon.imageUrl} />
    </View>
  );
}
