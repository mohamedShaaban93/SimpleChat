import Login from '../components/Login';
import Splash  from '../components/Splash'

import { Navigation } from "react-native-navigation";
Navigation.registerComponent('Splash',()=>Splash);
Navigation.registerComponent(`Splash`, ()=>Login );

export default Navigation;
