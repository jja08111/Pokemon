import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import PokemonListScreen from './screen/PokemonList';
import { AppStackParamList } from './navigation/types';

const RootStack = createStackNavigator<AppStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="PokemonList" component={PokemonListScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
