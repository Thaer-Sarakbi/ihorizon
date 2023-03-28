import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import Header from "../components/Header"
import Pokemon from "../components/Pokemon"
import PokemonDetailsScreen from "../screens/PokemonDetailsScreen"
import PokemonsListScreen from "../screens/PokemonsListScreen"
// import BottomTab from "./navigation/BottomTab"
// import CarDetailsScreen from "./screens/CarDetails"
// import MapScreen from "./screens/MapScreen"

// const Stack = createStackNavigator<RootStackParamsList>()
const PokemonStack = createStackNavigator()

export type RootStackParamsList = {
  PokemonsList: undefined,
  PokemonDetails: {
    id: number
  }
}

const PokemonsStack = () => {
  return(
    <PokemonStack.Navigator>
        <PokemonStack.Screen
          name='PokemonsList'
          component={PokemonsListScreen}
          options={{ headerShown: false }}
        />
        <PokemonStack.Screen
          name='PokemonDetails'
          component={PokemonDetailsScreen}
          options={{ headerShown: false }}
        />
        <PokemonStack.Screen
          name='Header'
          component={Header}
          options={{ headerShown: false }}
        />
    </PokemonStack.Navigator>
  )
}

export default PokemonsStack