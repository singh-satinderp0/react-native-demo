
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../container/login';
import Verification from '../container/Verification';
import Home from '../container/Home';


export const LoginStackNavigator = createStackNavigator(

  {
    Login: Login,
    Verification: Verification,
    Home : Home
    },
  {
    // unmountInactiveRoutes: true,
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      headerShown: false,
      // gesturesEnabled: false,
    }
  }
)
