import { createSwitchNavigator ,createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import 'react-native-gesture-handler';
import Splash from '../container/splash'
import { LoginStackNavigator} from './TabNavigatorStack';

const SplashStackNavigator = createStackNavigator(

  {
    Splash: Splash
  },
  {
    initialRouteName: 'Splash',
    defaultNavigationOptions: {
      headerShown: false
    },
  }
)

const AppSwitcher = createSwitchNavigator({
  SplashStackNavigator: SplashStackNavigator,
  LoginStack: LoginStackNavigator,
}
)

const AppContainer = createAppContainer(AppSwitcher)


export default AppContainer;