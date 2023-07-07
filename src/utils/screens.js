import Home from '../screens/HomeScreen';
import TabNavigator from '../navigation/TabNavigator';
import Profile from '../screens/ProfileScreen';
import Map from '../screens/MapScreen';
import GetStarted from '../screens/GetStartedScreen';
import Login from '../screens/LoginScreen';
import Signup from '../screens/SignupScreen';
import Soscreen from '../screens/SOSScreen';
import Emergency from '../screens/EmergencyContactScreen';
import TipsScreen from '../screens/TipsScreen';
export default {
  HomeScreen: Home,
  HomeTab: TabNavigator,
  ProfileScreen: Profile,
  Soscreen: Soscreen,
  MapScreen: Map,
  GetStartedScreen: GetStarted,
  Login: Login,
  Signup: Signup,
  Emergency: Emergency,
  Tips: TipsScreen,
  //Login is Signup and Signup is login
};
