import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';
import Header from '../components/Header';
import Seperator from '../components/Seperator';
import Spec from '../components/Spec';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemon } from '../redux/pokemonSlice';
import AnimatedLottieView from 'lottie-react-native';
import { RootStackParamsList } from '../stack/PokemonsStack';
import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from '@react-navigation/stack';
import { AppDispatch } from '../redux/store';
import { PokemonType } from '../types/types';

interface Props {
  route: RouteProp<RootStackParamsList, "PokemonDetails">
  navigation: StackNavigationProp<RootStackParamsList, "PokemonDetails">
}

interface MyState {
  pokemons: {
    pokemon: PokemonType,
    status: string,
    error: string
  }
}

function PokemonDetailsScreen({ route, navigation } : Props): JSX.Element {
  const pokemon = useSelector((state : MyState) => state.pokemons.pokemon)
  const status = useSelector((state : MyState) => state.pokemons.status)
  const error = useSelector((state : MyState) => state.pokemons.error)
  console.log(pokemon)

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getPokemon(route.params.id))
  },[])

  if(status === 'loading'){
    return(
      <View style={{ flex: 1 , justifyContent: 'center', alignItems: 'center'}}>
        <AnimatedLottieView source={require('../assets/loading.json')} autoPlay loop/>
      </View>
    )
} else if(status === 'succeeded'){
  return (
    <View style = {{  }}>
      <Header title={pokemon.name} navigation = {navigation} />
    
      <View style = {{  justifyContent: 'flex-start', alignItems: 'center', paddingTop: 20 }}>
        { pokemon.image ? <Image source={{ uri: pokemon.image }} style = {{ width: 200, height: 200 }} /> : null}

      <Spec title={'Name'} value={pokemon.name} />
      <Seperator />
      <Spec title={'Height'} value={pokemon.height} />
      <Seperator />
      <Spec title={'Weight'} value={pokemon.weight} />
      <Seperator />
      <Spec title={'Weight'} value={pokemon.types} />

      </View>
    </View>
  );
} else if(status === 'failed'){
    return(
      <View>
        <Text>{error}</Text>
      </View>
    )
} else {
  return(
    <View />
  )
}


 
}

export default PokemonDetailsScreen;
