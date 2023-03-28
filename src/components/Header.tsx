import React from 'react';
import { View, StyleSheet, TouchableOpacity, StatusBar, Text, Dimensions } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome'
import { RootStackParamsList } from '../stack/PokemonsStack';
import { StackScreenProps } from '@react-navigation/stack';

let height = Dimensions.get('screen').height;

interface Props {
  title: string,
  navigation: any,
  details: boolean
}

const Header = ({
  title,
  navigation,
  details
} : Props) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => {
            navigation.goBack()
          }}>
            {details && <Icon name="arrow-left" style={styles.icon} size={25} />}
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#448AFF',
    height: 80 * (height / 812),
    elevation: 8,
    shadowColor: "rgb(0,0,0)",
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    zIndex: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    paddingRight: 15,
    color: '#fff',
    // fontSize: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'white'
  },
  link: {
    fontSize: 15,
    color: '#14BEF1',
    textDecorationLine: 'underline',
  },
});