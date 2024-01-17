import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Pokemon from '../model/Pokemon';

export type AppStackParamList = {
  PokemonList: undefined;
  PokemonDetail: {
    pokemon: Pokemon;
  };
};

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList extends AppStackParamList {}
  }
}
