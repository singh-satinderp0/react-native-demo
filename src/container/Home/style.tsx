import scaleSheet from 'react-native-scalesheet'
import * as color from '../../res/colors'

const style = scaleSheet.create({
    header:{
        flexDirection:"row",
        // backgroundColor:'blue',
        alignItems:'center',
        paddingVertical:50,
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
    cardView:{
        backgroundColor:color.WHITE_COLOR,
        marginBottom:25,
        marginHorizontal:20,
        borderBottomColor:color.APP_BORDER_LIGHT_GRAY 
    },
    img:{
        width: 300,
        height:300,
        resizeMode:"cover"
    },
    Btn:{
        backgroundColor:'#eee',
        paddingHorizontal : 30,
        height:20,
        borderRadius : 10,
        marginTop:70,
        width:'20%'
    }
})

export default style