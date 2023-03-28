import React, { useEffect, useState } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import axios from 'axios'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Pokemon({ item, index, navigation }): JSX.Element {
    const [pokemon, setPokemon] = useState(null)
    console.log(pokemon)

    useEffect(() => {
        axios.get(item.url)
        .then(function (response) {
        //   console.log(response.data.sprites.front_default);
          setPokemon({ name: item.name, image: response.data.sprites.front_default, id: response.data.id })
        })
        .catch(function (error) {
          console.log(error);
        });

    },[])

    if(pokemon){
        return (
            <TouchableOpacity onPress={() => navigation.navigate('PokemonDetails', {id: pokemon.id})} style = {{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                <View style = {{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={{ uri: pokemon.image }} style = {{ width: 125, height: 125 }} /> 
                  <Text style = {{ fontSize: 20, fontWeight: 'bold' }}>{pokemon.name}</Text>
                </View>
                <MaterialCommunityIcons name="chevron-right"  size={25} />
            </TouchableOpacity>
          )
    } else {
        return(
            <View></View>
        )
    }
        
}

export default Pokemon;
