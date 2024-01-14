import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from 'react-query';
import PokemonListScreen from './screen/PokemonListScreen';
import { AppStackParamList } from './navigation/types';

const RootStack = createStackNavigator<AppStackParamList>();

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name="PokemonList" component={PokemonListScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
