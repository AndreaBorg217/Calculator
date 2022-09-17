/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, FlatList, TouchableOpacity, Text} from 'react-native';

const numbers = ['7','8','9','4','5','6','1','2','3'] 
const operators = ['./assets/divide.png', './assets/multiply.png', './assets/minus.png', './assets/plus.png']
//AC, backspace, =

const App = () => {
  const NumButton = ({number}) =>{
    return(
      <TouchableOpacity style = {styles.NumButton}>
        <Text style = {styles.number}>{number}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
    
    <View style = {styles.numpad}>
      <FlatList
        data={numbers}
        renderItem = {({item}) => <NumButton number = {item}/>}
        keyExtractor={(item, index) => index}
        numColumns  = {3}
      />

      <View style= {styles.bottomRow}>
        <TouchableOpacity style = {styles.zero}>
          <Text style = {styles.number}>0</Text>
        </TouchableOpacity>
        <NumButton number = {'.'}/>
      </View>
    </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0D6'
  },
  NumButton:{
    width: 80,
    height: 80,
    backgroundColor: '#49994B',
    borderRadius: 80/2,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  number:{
    color: 'white',
    fontSize: 30,
  },
  bottomRow:{
    flexDirection: 'row',
    transform: [{translateY: 4}]
  },
  zero:{
    width: 170,
    height: 80,
    backgroundColor: '#49994B',
    borderRadius: 80/2,
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: 5,
    marginRight: 6,
    paddingLeft: 32
  },
  numpad:{
    position: 'absolute',
    transform: [{translateY: 140}, {translateX: -40}]
  }
});

export default App;
