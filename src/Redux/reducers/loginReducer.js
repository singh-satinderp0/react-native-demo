import * as ActionTypes from '../actionCreator'
import NavigatorService from '../../navigation_config/services';
import LocalDataManager from '../../utils/LocalDataManager'

const intialState = {
    phone_code: "",
    phone_number: "",
    referral_code: "",
    isSignedIn: false,
    otpSent: false,
    showLoader: false,

    firstDigit: "",
    secondDigit: "",
    thirdDigit: "",
    fourthDigit: "",
    fifthDigit: "",
    sixthDigit: "",

    user_social_data : {},
    social_phone_number : "",
    social_phone_code : ""
}

const loginReducer = (state = intialState, actions) => {
    switch (actions.type) {
        case ActionTypes.LOGIN:
            return {
                ...state,
                showLoader: true
            }

        case ActionTypes.OTP_SENT_FAIL: {
            return {
                ...state,
                showLoader: false
            }
        }

        case ActionTypes.INPUT_HANDLER:
            // console.log(actions.payload);
            if (actions.payload.id == 1) {
                return {
                    ...state,
                    phone_number: actions.payload.text
                }
            }
            else if (actions.payload.id == 2) {
                return {
                    ...state,
                    referral_code: actions.payload.text
                }
            }
            else if (actions.payload.id == 3) {
                return {
                    ...state,
                    firstDigit: actions.payload.text
                }
            }
            else if (actions.payload.id == 4) {
                return {
                    ...state,
                    secondDigit: actions.payload.text
                }
            }
            else if (actions.payload.id == 5) {
                return {
                    ...state,
                    thirdDigit: actions.payload.text
                }
            }
            else if (actions.payload.id == 6) {
                return {
                    ...state,
                    fourthDigit: actions.payload.text
                }
            }
            else if (actions.payload.id == 7) {
                return {
                    ...state,
                    fifthDigit: actions.payload.text
                }
            }
            else if (actions.payload.id == 8){
                return {
                    ...state,
                    social_phone_number: actions.payload.text
                }
            }
            else {
                return {
                    ...state,
                    fifthDigit: actions.payload.text
                }
            }


        case ActionTypes.PHONE_CODE_HANDLER:
            return {
                ...state,
                phone_code: actions.payload.callingCode[0] ? actions.payload.callingCode[0] : "00"
            }

        case ActionTypes.SAVE_SOCIAL_DATA : 
            console.log("SAVE_SOCIAL_DATA>>>>>",actions.payload);
            
            return{
                ...state,
                user_social_data : actions.payload
            }

        case ActionTypes.DELETE_SOCIAL_DATA : 
        return{
            ...state,
            user_social_data : {},
            social_phone_number: "",
            firstDigit: "",
            secondDigit: "",
            thirdDigit:"",
            fourthDigit:""
            // showLoader:false
        }

        case ActionTypes.VERIFY_OTP_WITH_PHONE_NUMBER : 
        return{
            ...state,
            showLoader: true
        }

        case ActionTypes.OTP_SENT_SUCCESS:
            return {
                ...state,
                showLoader: false
            }

        case ActionTypes.OTP_VERIFY:
            return {
                ...state,
                showLoader: true
            }

        case ActionTypes.OTP_VERIFY_SUCCESS:
            // console.log(actions);
            
            LocalDataManager.saveDataAsyncStorage("LOGIN_DATA", JSON.stringify( actions.userData ))
            return {
                ...state,
                showLoader: false,
                firstDigit: "",
                secondDigit: "",
                thirdDigit: "",
                fourthDigit: "",
                fifthDigit: "",
                sixthDigit: "",
                phone_number: "",
                referral_code: "",
            }

        case ActionTypes.OTP_VERIFY_FAIL:
            return {
                ...state,
                showLoader: false
            }

        case ActionTypes.RESEND_OTP:
            return {
                ...state,
                showLoader: true
            }

        case ActionTypes.RESEND_OTP_SUCCESS:
            return {
                ...state,
                showLoader: false
            }

        default:
            return state

    }
    return state
}

export default loginReducer