import React, { Component } from 'react'
import { Image,View ,Text} from 'react-native'
import {style} from './style'

const SPLASH_WAITING_TIME = 1700

class Splash extends Component{ 

  async componentDidMount() {
    // console.log("SPLASH DID MOUNT",AsyncStorage.getItem(OTP_CONFIRM_DATA));
    
    // LocalDataManager.saveDataAsyncStorage(LOGIN_DATA,JSON.stringify({phone : "9464681000" , userLoggedIn : true}))
    await this.performTimeConsumingTask().then(success => {
      this.checkNextScreen();
    });
  }

  /**
   * @function checkNextScreen() Check wether user logged-in or not it will be redirected accordingly! 
   */

  async checkNextScreen() {   
      this.props.navigation.navigate('Login', null)
  }

//TabContainer
  /**
   * @function performTimeConsumingTask() holding thread for splash 
   */

  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        SPLASH_WAITING_TIME
      )
    );
  }
 

  render() {
    return (
      <View style={style.container} >
        <Image  style={style.icon}
          resizeMode={"contain"}
          source={require('../../res/drawable/splash.jpg')}
        />
      </View>
    )
  }
}

export default Splash
