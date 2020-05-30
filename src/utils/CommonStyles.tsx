//@ts-ignore
import ScaleSheet from 'react-native-scalesheet';
import  * as Color from '../res/colors'
import { Dimensions, Platform } from 'react-native';

export const CommonStyles = ScaleSheet.create({
    commonShadowStyle: {
        shadowColor: Color.APP_SHADOW_COLOR,
        borderColor : Color.APP_SHADOW_COLOR,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        borderRadius: 3,
        shadowOpacity: 1.4,
        elevation: 3,
    }
})


// export const commonShadowStyle = {
//     shadowColor: APP_SHADOW_COLOR,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 2,
//     shadowOpacity: 1.0,
//     elevation: 2,
// }