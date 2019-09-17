//import liraries
import React, { Component } from 'react';
import { View, ActivityIndicator , Button
  , StyleSheet , Text, Alert } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { throwStatement } from '@babel/types';

// create a component
class Splash extends Component {

  componentDidMount=()=>{
    console.log('====================================');
    console.log("componentDidMount");
    setTimeout(() => {
      console.log('====================================');
     Navigation.setRoot({
       root:{
         stack:{
           children:[{
             component:{
               name:'Login'
             }
           }]
         }
       }
     })
      console.log('====================================');
    },1000);
    console.log('====================================');
  }
  componentDidUpdate = ()=>{
    this.gotoLoginPage()
  }

  gotoLoginPage=()=>{
      console.log('====================================');
      console.log("hmadaaaaaaaaaaaaaa");
      Navigation.push(this.props.componentId,{
        component:{
          name:'Login'
        }
      })
      console.log('====================================');
  }
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={60} color='white'/>
        <Text style={{fontSize:25 , color:'white' , margin:10}}> Simple Chat </Text>
        <Button style={{color:'white'}} onPress={this.gotoLoginPage}
          title='Login'
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
export default Splash;
