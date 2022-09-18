/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, TouchableOpacity, Text, Image} from 'react-native';

const numbers = ['7','8','9','4','5','6','1','2','3'] 
const operators = [
  {placeholder: '÷', operator: '/', image: require('./assets/divide.png')}, 
  {placeholder: '×', operator: '*', image: require('./assets/multiply.png')}, 
  {placeholder: '-', operator: '-', image: require('./assets/minus.png')},
  {placeholder: '+', operator: '+', image: require('./assets/plus.png')}
]
//AC, backspace, =

const App = () => {
  const [input, setInput] = useState('')
  const [toEval, setEval] = useState('')
  const [output, setOutput] = useState('')
  const [equalPressed, setEqualPressed] = useState(false)

  useEffect(() => {
    if(!isNaN(parseFloat(toEval[toEval.length-1]))){
      setOutput('= '.concat(eval(toEval)))
    }
    else if(toEval == ''){
      setOutput(0)
    }

    if(input.length == 18){ 
      setInput(prev => prev.concat('\n'))
    }
    
    if(input[0] == '÷' || input[0] == '×' || input[0] == '-' || input[0] == '+'){
      setInput(prev => '0'.concat(prev))
      setEval(prev => '0'.concat(prev))
    }
  }, [toEval, input])
  

  const handlePress = (pressed, placeholder) =>{
    setInput(prev => prev.concat(placeholder))
    setEval(prev => prev.concat(pressed))
    setEqualPressed(false)
  }

  const NumButton = ({number}) =>{
    return(
      <TouchableOpacity style = {[styles.NumButton, {backgroundColor: '#49994B'}]} onPress = {() => handlePress(number, number)}>
        <Text style = {styles.number}>{number}</Text>
      </TouchableOpacity>
    );
  }

  const OperatorButton = ({image, operator, placeholder}) =>{
    return(
      <TouchableOpacity style = {[styles.NumButton, {backgroundColor: '#007B68'}]} onPress = {() => handlePress(operator, placeholder)}>
        <Image style={styles.operator} source={image}/>
      </TouchableOpacity>
    );
  }


  return (
    <View style={styles.container}>
      
    <View style = {styles.screen}>

      <View style = {styles.inputContainer}>
        <Text style = {equalPressed ? styles.inputEquals : styles.input}>{input}</Text>
      </View>
      
      <View style = {styles.outputContainer}>
        <Text style = {equalPressed ? styles.outputEquals : styles.output}>{output}</Text>
      </View>
     
    </View>

    <View style = {styles.controlButtons}>
      <TouchableOpacity style = {styles.controlButton} onPress = {() => {setInput(''); setEval(''); setEqualPressed(false);}}>
        <Text style = {styles.number}>AC</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.controlButton} onPress = {() => {setInput(prev => prev.slice(0, prev.length-1)); setEval(prev =>  prev.slice(0, prev.length-1)); setEqualPressed(false);}}>
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
        <TouchableOpacity style = {styles.zero} onPress = {() => handlePress('0', '0')}>
          <Text style = {styles.number}>0</Text>
        </TouchableOpacity>
        <NumButton number = {'.'}/>
      </View>
    </View>

      <View style = {styles.operatorKeys}>
        <FlatList
          data={operators}
          renderItem = {({item}) => <OperatorButton image = {item.image} operator = {item.operator} placeholder = {item.placeholder}/>}
          keyExtractor={(item, index) => index}
        />
        <TouchableOpacity style = {[styles.NumButton, {backgroundColor: '#007B68'}]} onPress = {() => setEqualPressed(true)}>
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
    fontSize: 30,
    flex: 1, 
    flexWrap: 'wrap',
    color: 'black'
  }, 
  output:{
    fontSize: 26,
    paddingRight: 5
  },
  inputEquals:{
    fontSize: 26,
  },
  outputEquals:{
    fontSize: 30,
    color: 'black',
    paddingRight: 5,
  }
});

export default App;
