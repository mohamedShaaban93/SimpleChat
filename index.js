/**
 * @format
 */


import { Navigation } from "react-native-navigation";
import Splash from './src/components/Splash';
import Login from './src/components/Login';
import Rigster from './src/components/Rigster';

Navigation.registerComponent(`Splash`, () =>Splash);
Navigation.registerComponent(`Login`, () =>Login);
Navigation.registerComponent(`Rigster`, () =>Rigster);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack:{
        children:[{
          component:{
            name:'Splash'
          }
        }]
      }
    }
  });
});
