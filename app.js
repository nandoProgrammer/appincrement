import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';


export default function App() {

  const[value, setValue] = useState(0);

  const increment = () => {
     setValue(value + 1);
  }

  const reset = () => {
     setValue(0);
  }


  return (
   <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.textValue}>{value}</Text>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button} onPress={increment}>
          <Text style={styles.textButton} >INCREMENTAR</Text>
        </TouchableOpacity>
         <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={reset}>
          <Text style={styles.textButton} >RESETAR</Text>
        </TouchableOpacity>
      </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      padding: 20,
      backgroundColor: '#575fcf',
    }, 
    containerText:{
      textAlign: "center",
      marginTop: 60,
      width: 100, 
      height: 100,
      alignSelf: "center",
      backgroundColor: "#182C61",
      borderRadius: 50,
      justifyContent: "center", 
      alignItems : "center",
    },
    textValue:{
      fontSize: 40,
      color: "#fff"
    },
    containerButton: {
      flex: 1,
      marginTop: 60,
    },
    button: {
      padding: 20,
      background: '#3c40c6',
      borderRadius: 50,
      textAlign: 'center'
    },
    textButton: {
      color: '#fff',
      fontWeight: 'bold',
    },
    resetButton: {
      marginTop: 20
    }

});
