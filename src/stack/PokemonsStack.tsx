import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import Pokemon from "../components/Pokemon"
import PokemonDetailsScreen from "../screens/PokemonDetailsScreen"
import PokemonsListScreen from "../screens/PokemonsListScreen"
// import BottomTab from "./navigation/BottomTab"
// import CarDetailsScreen from "./screens/CarDetails"
// import MapScreen from "./screens/MapScreen"

// const Stack = createStackNavigator<RootStackParamsList>()
const PokemonStack = createStackNavigator()

// export type RootStackParamsList = {
//   HomeScreen: undefined,
//   CarDetails: {
//     carId: string
//   },
//   carsScreen: undefined,
//   SettingsScreen: undefined,
//   Map: {
//     latitude: number,
//     longitude: number
//   },
//   Reserved: {
//     cars: {
//       id: string,
//       latitude: number,
//       longitude: number,
//       image: string,
//       name: string,
//       description: string,
//       length: number
//     }
//   },
//   Active: {
//     cars: {
//       id: string,
//       latitude: number,
//       longitude: number,
//       image: string,
//       name: string,
//       description: string,
//       length: number
//     }
//   },
//   AllCars: {
//     cars: {
//       id: string,
//       latitude: number,
//       longitude: number,
//       image: string,
//       name: string,
//       description: string,
//       length: number
//     }
//   },
//   ShareModal: undefined,
//   BottomTab: undefined
// }

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
    </PokemonStack.Navigator>
  )
}

export default PokemonsStack