import { NavigationProp, useNavigation } from '@react-navigation/native';

export type AppRouteParamList = {
  Home: undefined;
};

export function useAppNavigation(): NavigationProp<AppRouteParamList> {
  return useNavigation<NavigationProp<AppRouteParamList>>();
}
