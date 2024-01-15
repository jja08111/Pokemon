import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type AppStackParamList = {
  PokemonList: undefined;
  PokemonDetail: {
    name: string;
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
