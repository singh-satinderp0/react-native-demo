import ScaleSheet from 'react-native-scalesheet'
import * as color from '../../res/colors'
import { Platform } from 'react-native'

export const style = ScaleSheet.create({
    containerWrapper: {
        // flex: 1,
        flexDirection: 'column',
        // justifyContent:'center',
        backgroundColor: color.WHITE_COLOR,
        // height:'100%'
    },
    container: {
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'blue',
        // height:'100%',
        justifyContent:'space-between'
        // flex:1,
    },
    headerImgView:{
        width:'100%',
        height:300,
        
        // backgroundColor:'green'
    },
    headerImg:{
        resizeMode:'stretch',
        width:'100%',
        borderBottomRightRadius: 30,
        height:'90%',
    },

    loginForm: {
        paddingTop:27,
        paddingHorizontal:15,
        // marginTop:30,
        width: '100%',
        backgroundColor: color.WHITE_COLOR,
        alignContent: 'center',
        height:'60%'
    },
    enterPhoneTxt:{
        color:color.BLACK_COLOR,
        // fontWeight:'bold',
        fontSize : 16
    },
    terms_condition_view:{ 
        flexDirection:'row',
        flexWrap:'wrap',
        marginBottom:30 ,
        marginTop:10,
    },
    underLine:{
        backgroundColor:'#1fab96',
        paddingVertical:2,
        borderRadius:10,
        paddingHorizontal:20,
        width:160,
        marginTop:3
    },
    phone_main_view: { marginTop:10,marginBottom:15, flexDirection:'row',width:'100%',justifyContent:'space-between' },
    filterBtn:{
        // flex:1,
        justifyContent:'space-between',
        paddingHorizontal:10,
        // backgroundColor:'#eee',
        paddingTop:25,
        minWidth:70,
        maxWidth:90,
        // borderRadius : 5,
        borderBottomColor : color.APP_BORDER_LIGHT_GRAY,
        alignItems:'center'
    },
    filterBtnText:{
        // textAlign:"center",
        fontSize:12,
    },
    country_picker_font:{
        fontSize:14,
        onBackgroundTextColor:color.TEXT_COLOR_GRAY_DARK
    },
    country_picker_close:{
        width: Platform.OS === "ios" ? 25 : 15,
        height: Platform.OS === "ios" ? 25 : 15, 
        resizeMode:'contain'
    },
inputTxt:{
     width:250,
    //  backgroundColor:'blue', 
     height:40
},
inputViewStyle:{
    borderBottomColor:color.APP_BORDER_LIGHT_GRAY,
    width:'100%',
    paddingRight:105,
    marginLeft:15,
    // backgroundColor:'red',
    // height:40,
    marginTop:15
    // alignItems:'center'
},
    simpleTxt:{
        fontSize : 10,
        color: color.TEXT_COLOR_GRAY_LIGHT
    },
    terms_conditions: {
        color: color.TEXT_COLOR_BLUE, 
        fontSize: 11, 
        // alignSelf: 'center'
    },
    line:{
width:'30%',
backgroundColor:color.APP_BORDER_LIGHT_GRAY,
borderRadius:10,
marginHorizontal:3
    },
    sign_in_with:{
        // fontWeight:"bold",
        fontSize:12
    },
    submitBtn: {
        backgroundColor:"black",
        width:270,
        paddingVertical:12,
        borderRadius:12 ,
        marginTop:35,
        marginBottom:30,
        alignSelf: 'center',
    },
    submitTxt: {
        textAlign: 'center',
        fontSize: 16,
        color: color.WHITE_COLOR
    },
    socialLogin: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 90,
        alignSelf:'center',
        // paddingHorizontal:"36%",
        marginTop: '3.5vh',
    },
    socialIcon: {
        height: 30, width: 30,resizeMode:'contain'
    },

})
