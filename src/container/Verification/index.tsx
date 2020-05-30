import React, { Component } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, TextInput, Keyboard, Modal, ScrollView, Image } from 'react-native';
import { styles } from './styles';
import { localize } from '../../res/strings/verify_phone'
import * as color from '../../res/colors';
import Icon from 'react-native-vector-icons/FontAwesome'
import Toast from 'react-native-simple-toast';
import { connect } from 'react-redux'
import { inputHandler, resendOtp} from '../../Redux/actionCreator';
import { CountDownText } from 'react-native-countdown-timer-text';
import { Loader } from '../../utils/Loader';


/**
 * @class Verification used for Mobile number verification.
 */

export interface Props {
    firstDigit, secondDigit, thirdDigit, fourthDigit, fifthDigit, sixthDigit, inputHandler, confirm, navigation, otpVerifySuccess, otpVerifyFail, otpVerify, resendOtp, phone_number, phone_code, showLoader, referral_code, user_social_data, social_phone_number, verifyOtpWithPhoneNumber, deleteSocialData
}
var resendEnabled = false

class Verification extends Component<Props> {
   
    state = {
        statusBarHeight: 0,
    };

    // Instances of Textinput  to use for next TextInput focus and dismiss Keyboard
    txtFirst: TextInput;
    txtSecond: TextInput;
    txtThird: TextInput;
    txtFourth: TextInput;
    txtFifth: TextInput;
    txtSixth: TextInput;

    /** @function handleKeyPress : focus previous field when current field content delete */

    handleKeyPress({ nativeEvent: { key: keyValue } }, ref) {
        if (keyValue === 'Backspace') {
            ref.focus();
        }
    }

 /** @function confirm : Validate OTP to enter user in App */

    confirm = () => {

        // const otp = this.props.firstDigit + this.props.secondDigit + this.props.thirdDigit + this.props.fourthDigit + this.props.fifthDigit + this.props.sixthDigit
        // if (otp.length > 0) {
        //     const confirmation = this.props.navigation.getParam("confirmation")
        //     confirmation.confirm(otp)
        //         .then(userData => {
        //            alert("OTP Verify SuccessFully")
        //         })
        //         .catch(error => {
                   
        //             Toast.show("Invalid OTP", Toast.SHORT)
        //         })
           
        // } else {
        //     Toast.show("Invalid OTP", Toast.SHORT)
        // }

        this.props.navigation.navigate("Home")

    }

    resendOTP = (phone_code , phone_number) => {
        // console.log(phone_code , phone_number.phone_number);
        
        if(resendEnabled){
            this.props.resendOtp(phone_code , phone_number.phone_number)
        }
    }

    countDownEnds = () => {
        resendEnabled= true
        console.log("COUNT DOWN" ,resendEnabled );
    }

    goBackHandler = async() => {
        this.props.navigation.goBack()
    }

    render() {
        
        const { firstDigit, secondDigit, thirdDigit, fourthDigit, fifthDigit, sixthDigit, inputHandler, phone_number, phone_code, showLoader, referral_code, social_phone_number } = this.props
        return (
            <KeyboardAvoidingView
                behavior="padding" keyboardVerticalOffset={(Platform.OS === 'android') ? -200 : 5} style={{ height: '100%', width: '100%', flexDirection: 'column', justifyContent: 'flex-start', backgroundColor: color.WHITE_COLOR }} enabled>
                <View style={styles.container}>
                <Modal
          animated={true}
          transparent={true}
          visible={showLoader}>
          <Loader />
        </Modal>
                    <ScrollView showsVerticalScrollIndicator={false} style={styles.mainViewContainer}>
                        <View style={styles.scrollContainer}>
                            <View style={{ justifyContent: 'flex-start', width: '97%' }}>
                                <TouchableOpacity
                                    onPress={() => this.goBackHandler()}
                                    style={{ justifyContent: 'flex-start', alignItems: 'flex-start', }}>
                                    <Icon name="angle-left" size={28} color={color.BLACK_COLOR} />
                                </TouchableOpacity>
                            </View>
                            <Image style={styles.verifyImg} source={require('../../res/drawable/verify.png')} />
                            <View style={styles.enterOTPview}>
                                <Text style={styles.greyText}>{localize.INSTRUCTION_MESSAGE}</Text>
                                <Text style={[styles.greyBoldText, { fontSize: 12 }]}> </Text>
                            </View>
                            <View style={{ width: '85%', flexDirection: 'row', justifyContent: 'space-around' }}>

                                <TextInput ref={(input: any) => { this.txtFirst = input as any }} style={[styles.inputContainer,]} placeholder='' placeholderTextColor='grey' keyboardType='numeric' value={firstDigit} onChangeText={(text: any) => { inputHandler(text, 3), ((text.length == 1) ? this.txtSecond.focus() : null) }} maxLength={1} returnKeyType="done" />

                                <TextInput ref={(input: any) => { this.txtSecond = input as any }} style={[styles.inputContainer,]} placeholder='' placeholderTextColor='grey' keyboardType='numeric' onKeyPress={(e) => this.handleKeyPress(e, this.txtFirst)} value={secondDigit} onChangeText={(text: any) => { inputHandler(text, 4), ((text.length == 1) ? this.txtThird.focus() : null) }} maxLength={1} returnKeyType="done" />

                                <TextInput ref={(input: any) => { this.txtThird = input as any }} style={[styles.inputContainer,]} placeholder='' placeholderTextColor='grey' keyboardType='numeric' onKeyPress={(e) => this.handleKeyPress(e, this.txtSecond)} value={thirdDigit} onChangeText={(text: any) => { inputHandler(text, 5), ((text.length == 1) ? this.txtFourth.focus() : null) }} maxLength={1} returnKeyType="done" />

                                <TextInput ref={(input: any) => { this.txtFourth = input as any }} style={[styles.inputContainer]} placeholder='' placeholderTextColor='grey' keyboardType='numeric' onKeyPress={(e) => this.handleKeyPress(e, this.txtThird)} value={fourthDigit} onChangeText={(text: any) => { inputHandler(text, 6), ((text.length == 1) ? this.txtFifth.focus() : null) }} maxLength={1} returnKeyType="done" />

                                <TextInput ref={(input: any) => { this.txtFifth = input as any }} style={[styles.inputContainer]} placeholder='' placeholderTextColor='grey' keyboardType='numeric' onKeyPress={(e) => this.handleKeyPress(e, this.txtFourth)} value={fifthDigit} onChangeText={(text: any) => { inputHandler(text, 7), ((text.length == 1) ? this.txtSixth.focus() : null) }} maxLength={1} returnKeyType="done" />

                                <TextInput ref={(input: any) => { this.txtSixth = input as any }} style={[styles.inputContainer]} placeholder='' placeholderTextColor='grey' keyboardType='numeric' onKeyPress={(e) => this.handleKeyPress(e, this.txtFifth)} value={sixthDigit} onChangeText={(text: any) => { inputHandler(text, 8), ((text.length == 1) ? Keyboard.dismiss() : null) }} maxLength={1} returnKeyType="done" />
                            </View>

                            <View style={{ marginTop: 20, alignSelf: 'center', alignItems: 'center', marginBottom: 30 }}>

                                <TouchableOpacity style={styles.nextBtn}
                                    onPress={() => this.confirm()}
                                >
                                    <Text style={styles.btnTxt}>
                                        {localize.VERIFY}
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.resendOTP(phone_code , {phone_number : social_phone_number ? social_phone_number : phone_number})} 
                                    style={[styles.blueTextBtn]}>
                                    <View style={{ width: '100%', flexDirection: 'row' }}>
                                        <Text style={styles.redText}>{localize.RESEND_CODE}</Text>
                                        <CountDownText
                                            style={styles.txt}
                                            countType='seconds'
                                            auto={true}
                                            afterEnd={() => this.countDownEnds() }
                                            timeLeft={15}
                                            step={-1}
                                            startText='Start'
                                            endText="(0)"
                                            intervalText={(sec) => "(" + sec + ")"}
                                        />
                                    </View>

                                </TouchableOpacity>


                            </View>
                        </View>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const mapStateToProps = state => {
    return ({
        phone_number  : state.loginReducer.phone_number,
        phone_code    : state.loginReducer.phone_code,
        social_phone_number    : state.loginReducer.social_phone_number,
        referral_code    : state.loginReducer.referral_code,
        showLoader    : state.loginReducer.showLoader,
        user_social_data: state.loginReducer.user_social_data,
        firstDigit: state.loginReducer.firstDigit,
        secondDigit: state.loginReducer.secondDigit,
        thirdDigit: state.loginReducer.thirdDigit,
        fourthDigit: state.loginReducer.fourthDigit,
        fifthDigit: state.loginReducer.fifthDigit,
        sixthDigit: state.loginReducer.sixthDigit,
    })
}

const mapDispatchToProps = dispatch => ({
    inputHandler: (text, id) => dispatch(inputHandler(text, id)),
    resendOtp: (phone_code , phone_number) => dispatch(resendOtp(phone_code , phone_number)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Verification);
