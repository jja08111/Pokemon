import React from 'react';
import { Image, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Pokemon from '../../model/Pokemon';
import style from './style';

interface Props {
  style?: ViewStyle | undefined;
  pokemon: Pokemon;
  onPress?: () => void;
}

export default function PokemonCard(props: Props) {
  const { style: propStyle, pokemon } = props;
  const theme = useTheme();
  const { onPress } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...propStyle,
        ...style.pokemonCard,
        backgroundColor: theme.colors.card,
      }}>
      <Image style={style.image} src={pokemon.imageUrl} />
      <Text style={{ color: theme.colors.text }}>{pokemon.name}</Text>
    </TouchableOpacity>
  );
}
