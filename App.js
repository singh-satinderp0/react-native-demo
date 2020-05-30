/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import AppContainer from './src/navigation_config/AppContainer'
import { createStore,applyMiddleware } from 'redux'
import {Provider } from 'react-redux'
import rootReducer from './src/Redux/reducers'
import createSagaMiddleware from 'redux-saga'
import mySaga from './src/Redux/sagas'
import NavigatorService from './src/navigation_config/services';

const settings = {timestampsInSnapshots: true};

class App extends Component{
  
  render(){
    const sagaMiddleware = createSagaMiddleware()

    const store = createStore(rootReducer,applyMiddleware(sagaMiddleware))

    sagaMiddleware.run(mySaga);
    return(
      <Provider store={store}>
     <AppContainer 
     ref={navigatorRef => {
      NavigatorService.setContainer(navigatorRef);
      
    }}
     />   
      </Provider>

    )
  }
}


export default App;
