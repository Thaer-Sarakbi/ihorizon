import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import PokemonsStack from './src/stack/PokemonsStack';
import { Provider } from 'react-redux'
import { store } from './src/redux/store';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { pokemonsApi } from './src/redux/apiServices';

function App(): JSX.Element {

  return (
    // <Provider store={store}>
    //   <NavigationContainer>
    //     <AppStack />
    //   </NavigationContainer>
    // </Provider>
    <Provider store={store}>
      {/* <ApiProvider api={pokemonsApi}> */}
        <NavigationContainer>
          <PokemonsStack />
        </NavigationContainer>
      {/* </ApiProvider> */}
    </Provider>
  );
}

export default App;
