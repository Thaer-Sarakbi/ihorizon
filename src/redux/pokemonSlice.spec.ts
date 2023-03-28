import { store } from '../redux/store';
import { PokemonType } from '../types/types';
import { getPokemon, getPokemons } from './pokemonSlice';

test('Get Specefic Pokemon', async () => {
    let state = await store.dispatch(getPokemon(1));
    const pokemon: PokemonType = state.payload

    expect(pokemon.name).toBe('bulbasaur');
    expect(pokemon.height).toBe('7 cm');
    expect(pokemon.weight).toBe('69 kg');
  });

  test('Get List of Pokemons', async () => {
    let pokemons = store.getState().pokemons;
  
    let state = await store.dispatch(getPokemons());

    expect(state.payload.length).toBe(20);
  });