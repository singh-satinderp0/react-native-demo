//@ts-ignore
import ScaleSheet from 'react-native-scalesheet';
import * as color from '../../res/colors'
import { Dimensions } from 'react-native';
export const APP_SHADOW_COLOR = '#cecece';


export const styles = ScaleSheet.create({

  container: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: color.WHITE_COLOR,
    // padding: 8,
    // alignItems: 'center'
  },
  scrollContainer: {
    padding: 8,
    alignItems: 'center',
    // backgroundColor:'red',
    paddingTop:50
},
mainViewContainer:{
  flex:1,
marginTop:40
},
verifyImg:{
  width:150,
  height:100,
  resizeMode:'contain'
},
  enterOTPview:{
    marginTop: 25,
    // backgroundColor:'red',
    width:'70%',
    alignItems:'center'
  },
  greyText: {
    fontSize: 16,
    color: color.BLACK_COLOR,
    textAlign: 'center',
    // width: '100%',
  },
  nextBtn:{ 
    backgroundColor:color.BLACK_COLOR,
    width:270,
    paddingVertical:12,
    borderRadius:12 ,
    marginTop:15,
    marginBottom:5
},
btnTxt:{ color: color.WHITE_COLOR, alignSelf: 'center', fontSize: 14 },

  blueTextBtn: {
    justifyContent: 'center',
    height: 30,
    borderBottomColor:color.APP_THEME_COLOR_RED
  },
  redText: {
    fontSize: 12,
    color: color.APP_THEME_COLOR_RED,
    paddingBottom:2,
    textDecorationStyle:'solid',
    textDecorationLine:"underline" ,
    textDecorationColor:color.APP_THEME_COLOR_RED,
    // backgroundColor:'red'
    paddingRight:5,
    // width:'19%'

  },
  txt:{
    fontSize: 12,
    color: color.TEXT_COLOR_GRAY_LIGHT,
    paddingBottom:2,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // height: 80,
    width: '16%',
    padding: 10,
    borderBottomWidth:2,

    // borderWidth: 0.2,
    borderBottomColor: color.APP_BORDER_LIGHT_GRAY,
    // borderRadius: 10,
    backgroundColor: color.WHITE_COLOR,
    textAlign: 'center',
    fontSize: 26,
  
  },
});
