import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Pokemon from '../components/Pokemon';
import { getPokemon, getPokemons } from '../redux/pokemonSlice';
import AnimatedLottieView from 'lottie-react-native';
import { PokemonType } from '../types/types';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamsList } from '../stack/PokemonsStack';
import { AppDispatch } from '../redux/store';
import Header from '../components/Header';
 
interface MyState {
  pokemons: {
    data: Array<PokemonType>,
    status: string,
    error: string
  }
}

function PokemonsListScreen({ navigation } :  StackScreenProps<RootStackParamsList, 'PokemonsList'>): JSX.Element {
  const [isFetching, setIsFetching] = useState(false)
const pokemons = useSelector((state: MyState) => state.pokemons.data)
const status = useSelector((state: MyState) => state.pokemons.status)
const error = useSelector((state: MyState) => state.pokemons.error)

const dispatch = useDispatch<AppDispatch>()

  const onRefresh = () => {
    setIsFetching(true)
    dispatch(getPokemons())
    setIsFetching(false)
  }

  useEffect(() => {
    dispatch(getPokemons())
},[])

const renderItem = ({ item, index }: { item: PokemonType, index: number }) => {
    return(
        <Pokemon item={item} index={index} navigation={navigation} />
      )

  }

if(status === 'loading'){
  return(
    <View style={{ flex: 1 , justifyContent: 'center', alignItems: 'center'}}>
      <AnimatedLottieView source={require('../assets/loading.json')} autoPlay loop/>
    </View>
  )
} else if(status === 'succeeded'){
  return (
    <>
      <Header details={false} title={'PokeReact'} navigation = {navigation} />
      <View style={{ flex: 1, paddingTop: 10, paddingHorizontal: 10 }}>

          <FlatList
          data={pokemons}
          renderItem={renderItem}
          onRefresh= {() => onRefresh()}
          refreshing={isFetching}
          />
      </View>
    </>
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

export default PokemonsListScreen;
