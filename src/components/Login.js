//import liraries
import React, { Component } from 'react';
import { View,Text, StyleSheet , Button } from 'react-native';
import { Navigation } from 'react-native-navigation';

// create a component
class Login extends Component {
  
  gotoSignUpPage=()=>{
    Navigation.push(this.props.componentId,{
      component:{
        name:'Rigster'
      }
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:35 , color:'white'}}>Hamada Login</Text>
        <Button
        onPress={this.gotoSignUpPage}
        style={{color:'white'}}
        title='Sign Up'
        />
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
export default Login;
