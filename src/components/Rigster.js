//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class Rigster extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:35 , color:'white'}}>Rigster</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkblue',
  },
});

//make this component available to the app
export default Rigster;
