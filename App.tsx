import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import PokemonsStack from './src/stack/PokemonsStack';
import { Provider } from 'react-redux'
import { store } from './src/redux/store';

function App(): JSX.Element {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <PokemonsStack />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
