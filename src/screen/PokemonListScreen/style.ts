import { FlexStyle, StyleSheet } from 'react-native';

export const CardMargin = 16;

export default StyleSheet.create({
  root: {
    flex: 1,
  },
  pokemonList: {
    flex: 1,
    padding: CardMargin,
  },
  pokemonListContentContainer: {
    gap: CardMargin,
    paddingBottom: 320,
  } as FlexStyle,
  pokemonListColumnWrapper: {
    justifyContent: 'space-between',
  } as FlexStyle,
});
