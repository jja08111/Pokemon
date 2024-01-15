import React from 'react';
import { Image, Text, View, ViewStyle } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Pokemon from '../../model/Pokemon';
import style from './style';

interface Props {
  style?: ViewStyle | undefined;
  pokemon: Pokemon;
}

export default function PokemonCard(props: Props) {
  const { style: propStyle, pokemon } = props;
  const theme = useTheme();

  return (
    <View
      style={{
        ...propStyle,
        ...style.pokemonCard,
        backgroundColor: theme.colors.card,
      }}>
      <Image style={style.image} src={pokemon.imageUrl} />
      <Text style={{ color: theme.colors.text }}>{pokemon.name}</Text>
    </View>
  );
}
