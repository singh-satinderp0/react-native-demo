import { Alert } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';

class LocalDataManager {

   /**
    * @function logout user from local storage!
    */
    static logout = async (ref) => {
        await LocalDataManager.removeAllLocalData()
        ref.props.navigation.navigate('Login')
    }

    static removeAllLocalData = async () => {
        try {
            await AsyncStorage.removeItem("LOGIN_DATA");
        } catch (error) {
            console.log(error.message);
        }
    }

    static saveDataAsyncStorage = async (key: string, data: any) => {
        try {
            await AsyncStorage.setItem(key, data);
        } catch (error) {
            console.log(error.message);
        }
    }

    static removeLocalData = async (key: string) => {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            console.log(error.message);
        }
    }

}

export default LocalDataManager

