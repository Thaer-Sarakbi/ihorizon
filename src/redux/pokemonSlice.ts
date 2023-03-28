import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { PokemonType } from '../types/types'

interface PokemonList {
  id: number,
  name: string,
  image: string,
}

interface Pokemon {
  name: string, 
  image: string, 
  height: string, 
  weight: string,
  types: Array<string>
}
interface MyState {
  data: Array<PokemonList>,
  status: string,
  error: string | undefined
}

export const getPokemons = createAsyncThunk("pokemons/getPokemons", async () => {
let pokemonsList: Array<Pokemon> = []

await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
    .then(function (response) {
    pokemonsList.push(response.data.results)
    })
    .catch(function (error) {
      throw error
    });

  return pokemonsList[0]
})

export const getPokemon = createAsyncThunk("pokemons/getPokemon", async (id : number) => {
  let pokemon 
  
  await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(function (response) {
      pokemon = { name: response.data.name, 
                       image: response.data.sprites.front_default, 
                       height: response.data.height + ' cm', 
                       weight: response.data.weight + ' kg',
                       types: response.data.types }
        // })
      })
      .catch(function (error) {
        throw error
      });

    return pokemon
  })

const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState: {
    data: [],
    pokemon: '',
    status: '',
    error: ''
  } as MyState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getPokemons.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getPokemons.fulfilled, (state, { payload }) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        state.data = payload
        // state.isLoading = loading
      })
      .addCase(getPokemons.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(getPokemon.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getPokemon.fulfilled, (state, {payload}) => {
        console.log(payload)
        state.status = 'succeeded'
        // Add any fetched posts to the array
        state.pokemon = payload
      })
      .addCase(getPokemon.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export default pokemonSlice