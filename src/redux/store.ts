import { configureStore  } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import { pokemonsApi } from './apiServices'
import pokemonSlice from './pokemonSlice'
import { persistStore, persistReducer } from 'redux-persist'

export const store = configureStore({ reducer: {
    pokemons: pokemonSlice.reducer,
    // [pokemonsApi.reducerPath]: pokemonsApi.reducer,
},
// middleware: (getDefaultMiddleware) => {
//     return getDefaultMiddleware().concat(pokemonsApi.middleware)
// }
// middleware: (getDefaultMiddleware) => getDefaultMiddleware({
//     immutableCheck: false,
//     serializableCheck: { warnAfter: 128 },
//   })

})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch