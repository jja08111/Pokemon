import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screen/home/HomeScreen';

const RootStack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="TodoList" component={HomeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
