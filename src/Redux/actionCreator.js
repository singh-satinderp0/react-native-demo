import { RequestOn } from '../utils/Enums';

export const LOGIN = "LOGIN"
export const OTP_SENT_SUCCESS = "OTP_SENT_SUCCESS"

export const INPUT_HANDLER = "INPUT_HANDLER"
export const PHONE_CODE_HANDLER = "PHONE_CODE_HANDLER"

export const RESEND_OTP = "RESEND_OTP"
export const RESEND_OTP_SUCCESS = "RESEND_OTP_SUCCESS"
export const OTP_SENT_FAIL = "OTP_SENT_FAIL"

export const INTERNET_FAIL = "INTERNET_FAIL"

/***********************************************COMMON ACTION CREATORS******************************************/
export const inputHandler = (text,id) => {
    return{
        type : INPUT_HANDLER,
        payload : {
            text,id
        }
    }
}

export const internetFail = (text,id) => {
    return{
        type : INTERNET_FAIL,
        payload : {
            text,id
        }
    }
}

/***********************************************LOGIN SCREEN ACTION CREATORS******************************************/ 
export const login = (phone_code , phone_number, referral_code) => {  
    return{
        type : LOGIN,
        payload : {
            phone_code , phone_number, referral_code ,RequestFor : RequestOn.login
        }
    }
}

export const otpSentFail = () => {  
    return{
        type : OTP_SENT_FAIL,
    }
}

export const otpSentSuccess = () => {  
    return{
        type : OTP_SENT_SUCCESS,
    }
}

export const changePhoneCodeHandler = (payload) =>{
    return{
        type : PHONE_CODE_HANDLER,
        payload : payload
    }
}


/***********************************************OTP SCREEN ACTION CREATORS******************************************/

export const resendOtp = (phone_code , phone_number) => {    
    // console.log("after success otp sent >>", payload);
    return{
        type : RESEND_OTP,
        payload : {
            phone_code , phone_number ,RequestFor : RequestOn.otp
        }
    }
}

export const resendOtpSuccess = () => {    
    // console.log("after success otp sent >>", payload);
    return{
        type : RESEND_OTP_SUCCESS,
    }
}
