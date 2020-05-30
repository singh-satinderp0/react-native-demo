import ScaleSheet from 'react-native-scalesheet'
import { WHITE_COLOR ,TEXT_COLOR_GRAY_DARK} from '../../res/colors'


export const style = ScaleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: WHITE_COLOR
    },
    icon: {
        width: "100vw",
        height: "100vh",
        resizeMode: "stretch"
    }, text: {
        fontSize: 24,
        color: TEXT_COLOR_GRAY_DARK
    },

})