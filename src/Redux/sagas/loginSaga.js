import { takeEvery,call,put,take } from 'redux-saga/effects'
import * as actions from '../actionCreator'
import { loginApi, verifyOtpApi, verifySocialApi } from '../api/login_api'
import { RequestOn } from '../../utils/Enums';
import NavigatorService from '../../navigation_config/services';
import Toast from 'react-native-simple-toast'
import LocalDataManager from '../../utils/LocalDataManager';
import { Platform } from 'react-native'


function* handleOtp(data){
  yield put(actions.otpSentFail())
NavigatorService.navigate("Verification",{confirmation:data.payload})
}

function* handleLogin(payload){

  try {
    const result =  yield call( loginApi,payload );
    // console.log("OTP_SSENT IN HANDLE LOGIN>>>",fetchOtpVerifyMethod);
      
    if(payload.payload.RequestFor == RequestOn.login){  
yield put(actions.otpSentSuccess(result ));
    }else{
      yield put(actions.resendOtpSuccess());
    }
      
   } catch (error) {
    yield put(actions.otpSentFail(error))
   
    if(error == "Internet not found"){
      Toast.show( "Internet not found",Toast.SHORT)
    }else{
      setTimeout(() => {
        Toast.show("Invalid phone number",Toast.SHORT)
      }, Platform.OS =="android" ? 0 : 1000);
    }
       console.log("Login CATCH>>>>",error);
       
   }
}



export default function* watchLoginStart(){
    yield takeEvery(actions.LOGIN,handleOtp)
    yield takeEvery(actions.OTP_SENT_SUCCESS,handleOtp)
    yield takeEvery(actions.RESEND_OTP,handleLogin)
}