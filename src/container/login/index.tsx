import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, KeyboardAvoidingView, Modal, Platform, ScrollView } from 'react-native'
import { style } from './style'
import { Inputfield } from '../../custom/CustomComponent'
import { localize } from '../../res/strings/login'
import Toast from 'react-native-simple-toast';
import { CommonStyles } from '../../utils/CommonStyles'
import * as color from '../../res/colors'
import CountryPicker from '../../utils/countryPicker'
import { SafeAreaView } from 'react-navigation'
import { connect } from 'react-redux'
import { login, inputHandler, changePhoneCodeHandler, saveSocialData, deleteSocialData } from '../../Redux/actionCreator'
import { Loader } from '../../utils/Loader'

/**
 * @class Login used for register user and one time login process before entering in app when installed app fresh .
 */

export interface Props {
    changePhoneCodeHandler, phone_number, referral_code, inputHandler, login, phone_code, otpSent, showLoader, verifyOtpWithPhoneNumber, saveSocialData,social_phone_number, social_phone_code, deleteSocialData
}


class Login extends Component<Props>{

    referral_code = React.createRef()

    state = {
        statusBarHeight: 0,
        isPhonePopupVisible : false
    }

    renderDropDownArrow() {

        var icon = require('../../res/drawable/down-arrow.png')
        return (
            <Image
                source={icon}
                style={[{
                    width: 15, height: 15,
                    marginLeft: 10
                }]} />
        );
    }

    _login = async(phone_code, phone_number, referral_code) => {
      console.log(phone_number);
      
        if (phone_number) {
            this.props.login(phone_code, phone_number, referral_code)
        } else {
            Toast.show("Phone number is required")
        }
    }

    render() {
        const { changePhoneCodeHandler, phone_number, referral_code, inputHandler, login, phone_code, showLoader, social_phone_number, social_phone_code } = this.props

        return (
            <KeyboardAvoidingView
                behavior="padding"
                keyboardVerticalOffset={(Platform.OS === 'android') ? -340 : this.state.statusBarHeight + 14} style={{ height: '100%', width: '100%', flexDirection: 'column', justifyContent: 'flex-start', backgroundColor: 'white' }} enabled>
                <SafeAreaView forceInset={{ top: 'never' }} style={{ flex: 1, backgroundColor: 'white' }}>
                    <ScrollView nestedScrollEnabled={true} keyboardShouldPersistTaps="always" contentContainerStyle={[style.containerWrapper]}>

                        <Modal
                            animated={true}
                            transparent={true}
                            visible={showLoader}>
                            <Loader />
                        </Modal>
                        <View style={style.container}>

                            <View style={style.headerImgView}>
                                <Image style={style.headerImg} source={require('../../res/drawable/welcome.png')} />
                            </View>

                            <View style={[style.loginForm, CommonStyles.commonShadowStyle, { elevation: 10, borderTopLeftRadius: 40, borderTopEndRadius: 40 }]}>
                                <View>
                                    <Text style={style.enterPhoneTxt}>{localize.PHONE}</Text>
                                    <View style={style.underLine} />
                                </View>
                                <View style={style.phone_main_view}>
                                    <View style={{ backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: color.APP_BORDER_LIGHT_GRAY }}>
                                        <View
                                            style={[style.filterBtn, { borderBottomWidth: 0, backgroundColor: color.WHITE_COLOR, flexDirection: 'row' }]}>
                                            <CountryPicker
                                                buttonStyle={style.country_picker_close}
                                                mainContainer={{ backgroundColor: 'white', width: '70%' }}
                                                themeStyle={style.country_picker_font}
                                                onSelect={changePhoneCodeHandler}
                                            />
                                            {this.renderDropDownArrow()}
                                        </View>

                                    </View>
                                    <View style={[style.inputViewStyle, { borderBottomWidth: 0 }]}>
                                        <Inputfield
                                            keyboardType="number-pad"
                                            inputViewStyles={[{ borderBottomWidth: 0, marginBottom: 0, paddingVertical: 0, marginVertical: 0 }]}
                                            inputStyles={[style.inputTxt, { borderBottomWidth: 0 }]}
                                            submitEdit={() => this.referral_code.current.focus()}
                                            value={phone_number}
                                            placeholder={localize.PHONE_PLACEHOLDER}
                                            onChangeText={(text: any) => inputHandler(text, 1)}
                                            blurOnSubmit={false}
                                        />
                                    </View>
                                </View>

                                <Inputfield
                                    forwardedRef={this.referral_code}
                                    value={referral_code}
                                    placeholder={localize.REFERAL_CODE_PLACEHOLDER}
                                    secureTextEntry={false}
                                    onChangeText={(text: any) => inputHandler(text, 2)}
                                    blurOnSubmit={true}
                                />
                                <Text style={style.terms_condition_view}>
                                    <Text style={style.simpleTxt}>{localize.TERMS_CONDITION_MSG}</Text>
                                    <Text
                                        style={style.terms_conditions}>
                                        {localize.TERMS_CONDITIONS}
                                    </Text>
                                </Text>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <View style={[style.line, { paddingVertical: 1, }]}></View>
                                    <Text style={style.sign_in_with}>{localize.OR_SIGN_IN}</Text>
                                    <View style={[style.line, { paddingVertical: 1, }]}></View>
                                </View>
                                <View style={style.socialLogin}>
                                    <TouchableOpacity>
                                        <Image style={style.socialIcon} source={require('../../res/drawable/google.png')} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image style={style.socialIcon} source={require('../../res/drawable/facebook.png')} />
                                    </TouchableOpacity>

                                </View>

                                <TouchableOpacity
                                    style={style.submitBtn}
                                    // onPress={() => this.props.navigation.navigate("Verification")}
                                    onPress={() => this._login(phone_code, phone_number,referral_code)}
                                >
                                    <Text style={style.submitTxt}>{localize.CONTINUE}</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </ScrollView>
                </SafeAreaView>
            </KeyboardAvoidingView>
        )
    }
}

const mapStateToProps = (state: any) => {
    return ({

        phone_number: state.loginReducer.phone_number,
        referral_code: state.loginReducer.referral_code,

        social_phone_number: state.loginReducer.social_phone_number,
        social_phone_code: state.loginReducer.social_phone_code,
        phone_code: state.loginReducer.phone_code,
        otpSent: state.loginReducer.otpSent,
        showLoader: state.loginReducer.showLoader
    })
}

const mapDispatchToProps = dispatch => ({
    login: (phone_code, phone_number, referral_code) => dispatch(login(phone_code, phone_number, referral_code)),
    inputHandler: (text, id) => dispatch(inputHandler(text, id)),
    changePhoneCodeHandler: (payload) => dispatch(changePhoneCodeHandler(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
