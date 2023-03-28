import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Pokemon from '../components/Pokemon';
import { getPokemon, getPokemons } from '../redux/pokemonSlice';
import AnimatedLottieView from 'lottie-react-native';
import { useGetPokemonsQuery } from '../redux/apiServices';
 
function PokemonsListScreen({ navigation }): JSX.Element {
  const [isFetching, setIsFetching] = useState(false)
const pokemons = useSelector((state) => state.pokemons.data)
const status = useSelector((state) => state.pokemons.status)
// console.log(pokemons)
// const { data } = useGetPokemonsQuery()
// console.log(data)

const dispatch = useDispatch()

  const onRefresh = () => {

  }

  useEffect(() => {
    dispatch(getPokemons())

    // axios.get('https://pokeapi.co/api/v2/pokemon/')
    // .then(function (response) {
    //     // console.log(response.data.results)
    // //   console.log(response.data.sprites.front_default);
    // //   data.push({ name: response.data.name })
    //   setPokemons(response.data.results)
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

},[])

const renderItem = ({ item, index }) => {
    return(
        <Pokemon item={item} index={index} navigation={navigation} />
      )

  }

if(pokemons === undefined){
    return(
      <View style={{ flex: 1 , justifyContent: 'center', alignItems: 'center'}}>
        <AnimatedLottieView source={require('../assets/loading.json')} autoPlay loop/>
      </View>
    )
} else {
    return (
        <View style={{ flex: 1, paddingTop: 10, paddingHorizontal: 10 }}>
            <FlatList
            // keyExtractor={(index) => index}
            data={pokemons}
            renderItem={renderItem}
            onRefresh= {() => onRefresh()}
            refreshing={isFetching}
            />
      </View>
      );
}
}

export default PokemonsListScreen;
