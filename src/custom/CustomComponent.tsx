//@ts-ignore
import { View, TouchableOpacity, TouchableHighlight, Image, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import ScaleSheet from 'react-native-scalesheet';
import * as Color from '../res/colors/index'
import Icons from 'react-native-vector-icons/FontAwesome'

export const Inputfield = React.forwardRef((props: any, ref: any) => {
const { keyboardType,
    submitEdit , blurOnSubmit,
    secureTextEntry , value,maxLength,
    placeholder , onChangeText,
    inputStyles , placeholderColor,
    passwordShowHandle,password } = props

    const { forwardedRef, ...rest } = props;
    return (
        <View style={[styles.inputView, props.inputViewStyles,{borderBottomWidth: 1}]}>
            <TextInput
                {...rest}
                // multiline={true}
                keyboardType={keyboardType}
                scrollEnabled={false}
                ref={forwardedRef}
                onSubmitEditing={submitEdit}
                blurOnSubmit={blurOnSubmit}
                secureTextEntry={secureTextEntry}
                value={value}
                maxLength={maxLength}
                placeholder={placeholder}
                onChangeText={onChangeText}
                style={[styles.inputField, inputStyles]}
                placeholderTextColor={placeholderColor ? placeholderColor : Color.INPUTFIELD_PLACEHOLDER_COLOR}
            />
            {password ?
                <TouchableOpacity onPress={passwordShowHandle}>
                    <Icons name={secureTextEntry ? "eye-slash" : "eye"} size={16} />
                </TouchableOpacity>
                :
                null
            }
        </View>
    )
}
)

export const CommonHeader = (props : any) => {
    const { style,title,onClick } = props
    return(
    <View style={[styles.header,style]}>
    <TouchableOpacity onPress={onClick} style={styles.backBtn}>
        <Icons name="angle-left" size={33} />
    </TouchableOpacity>

<Text style={styles.title}>{title}</Text>
</View>
)}

export const NoDataFoundView = (props: any) => {
    return (
        <View style={[styles.no_data_found_main_view]}>
            <Image style={[styles.no_data_img, { resizeMode: 'cover' }]} source={require('../res/drawable/no_data.png')} />
            <Text style={styles.no_data_found_text}>{props.warning_message}</Text>
        </View>
    )
}
export const NoInternetFoundView = (props: any) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ height: 400, width: 400, resizeMode: 'contain' }} source={require('../res/drawable/internet_error.png')} />
            {/* <Text style={styles.light_text}>Please check your internet connection</Text> */}
            <TouchableOpacity style={{ padding: 30 }} onPress={props.func}>
                <Text style={{ color: Color.APP_THEME_COLOR_RED, textDecorationLine: 'underline', fontWeight: "bold" }}>Try Again</Text>
            </TouchableOpacity>

        </View>
    )
}


const styles = ScaleSheet.create({
    //Button
    header:{
        flexDirection:"row",
        // backgroundColor:'blue',
        alignItems:'center',
        paddingTop:60,
        paddingHorizontal:10,
    },
    backBtn:{
        // backgroundColor:'red',
        width:'20%'
    },
    title:{
        // backgroundColor:'green',
        width:'60%',
        textAlign:'center',
        fontSize:24
    },

    inputView: {
        marginBottom: 10,
        borderColor: Color.APP_BORDER_LIGHT_GRAY,
        marginVertical: '1.5vh',
        // borderRadius: 20,
        paddingVertical: 7,
    },
    inputField: {
        // textAlign: 'left',
        paddingVertical: 0,
        // width: '100%',
        borderRadius: 20,
        // alignSelf: 'center',
        color: Color.TEXT_COLOR_GRAY_DARK
    },
 
    shadowStyle: {
        borderRadius: 3,
        shadowColor: Color.APP_SHADOW_COLOR,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 1.4,
        elevation: 2,
    },
    SearchBarsearchIconImg: {
        width: 10,
        height: 10
    },

    textField:{  marginLeft: 5, padding: 0, fontSize: 12, color: Color.BLACK_COLOR 
    },

    no_data_found_main_view: {
        alignItems: 'center',
        flexDirection: 'column'
    },
    no_data_img: {
        marginTop: 50,
        width: 200,
        height: 150,
    },
    no_data_found_text: {
        alignSelf: 'center',
        marginTop: 20,
        fontSize: 14,
        color: Color.TEXT_COLOR_GRAY_LIGHT
    },
    history_view:{
    // width:'90%',
    flexDirection:'row',
    // backgroundColor:'pink',
    marginBottom:15,
    // paddingHorizontal:20,
    // paddingRight:40

    },
 
})
