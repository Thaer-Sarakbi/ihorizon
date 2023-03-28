import { configureStore  } from '@reduxjs/toolkit'
import pokemonSlice from './pokemonSlice'
import { persistStore, persistReducer } from 'redux-persist'

export const store = configureStore({ reducer: {
    pokemons: pokemonSlice.reducer,
},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch