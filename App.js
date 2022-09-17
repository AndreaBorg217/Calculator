/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, FlatList, TouchableOpacity, Text, Image} from 'react-native';

const numbers = ['7','8','9','4','5','6','1','2','3'] 
const operators = [require('./assets/divide.png'), require('./assets/multiply.png'), require('./assets/minus.png'), require('./assets/plus.png')]
//AC, backspace, =

const App = () => {
  const NumButton = ({number}) =>{
    return(
      <TouchableOpacity style = {[styles.NumButton, {backgroundColor: '#49994B'}]}>
        <Text style = {styles.number}>{number}</Text>
      </TouchableOpacity>
    );
  }

  const OperatorButton = ({image}) =>{
    return(
      <TouchableOpacity style = {[styles.NumButton, {backgroundColor: '#007B68'}]}>
        <Image style={styles.operator} source={image}/>
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.container}>
      
    <View style = {styles.screen}>

      <View style = {styles.inputContainer}>
        <Text style = {styles.input}>10+2+3+4+5+6+7+8+9+0</Text>
      </View>
      
      <View style = {styles.outputContainer}>
        <Text style = {styles.output}>10000</Text>
      </View>
     
    </View>

    <View style = {styles.controlButtons}>
      <TouchableOpacity style = {styles.controlButton}>
        <Text style = {styles.number}>AC</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.controlButton}>
        <Image style={styles.operator} source={require('./assets/backspace.png')}/>
      </TouchableOpacity>
    </View>

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

      <View style = {styles.operatorKeys}>
        <FlatList
          data={operators}
          renderItem = {({item}) => <OperatorButton image = {item}/>}
          keyExtractor={(item, index) => index}
        />
        <TouchableOpacity style = {[styles.NumButton, {backgroundColor: '#007B68'}]}>
          <Image style={styles.operator} source={require('./assets/equals.png')}/>
        </TouchableOpacity>
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
  },
  operator:{
    width: 32,
    height: 32,
  },
  operatorKeys:{
    position: 'absolute',
    transform: [{translateY: 98}, {translateX: 140}]
  },
  controlButton: {
    width: 130,
    height: 80,
    borderRadius: 80/2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00626D',
  },
  controlButtons:{
    position: 'absolute',
    flexDirection: 'row',
    transform: [{translateY: -85}, {translateX: -40}]
  },
  screen:{
    width: 340,
    height: 160,
    backgroundColor: '#f8f8ff',
    position: 'absolute',
    transform: [{translateY: -240}],
    borderRadius: 10,
    borderColor: '#d4d4d4',
    borderWidth: 5
  }, 
  inputContainer:{
    width: 340,
    height: 160,
    margin: 15,
    position: 'absolute',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  outputContainer:{
    width: 340,
    height: 160,
    margin: -15,
    position: 'absolute',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  input:{
    fontSize: 26,
    textAlign: 'left',
  }, 
  output:{
    fontSize: 34,
  }
});

export default App;
