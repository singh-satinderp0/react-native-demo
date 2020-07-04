import * as ActionTypes from '../actionCreator'

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


        default:
            return state

    }
    return state
}

export default loginReducer