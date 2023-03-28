import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Spec = ({
  title,
  value
}) => {

  if(Array.isArray(value)){
    return(
      <View style = {{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 50, alignItems: 'center' }}> 
        <Text style = {{ fontWeight: 'bold', fontSize: 30, color: '#212121', flex: 1 }}>{title}</Text>
        <View style = {{ flex: 1 }}>
          {value.map((type, index) => {
            return(
              <Text key={index} style = {{ fontWeight: 'bold', fontSize: 20, color: '#757575', textAlign: 'center'}}>{type.type.name}</Text>
            )
          })}
          </View>
    </View>
    )

  } else {
    return (
        <View style = {{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 50, alignItems: 'center' }}> 
            <Text style = {{ fontWeight: 'bold', fontSize: 30, color: '#212121', flex: 1 }}>{title}</Text>
            <Text style = {{ fontWeight: 'bold', fontSize: 20, color: '#757575', textAlign: 'center', flex: 1}}>{value}</Text>
        </View>
      );
  }
};

export default Spec;

const styles = StyleSheet.create({

});