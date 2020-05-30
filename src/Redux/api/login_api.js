import firebase from 'react-native-firebase'
export const loginApi = async data => {
    console.log("_Login",data.payload.phone_code + data.payload.phone_number);        
        return await new Promise((resolve, reject) => {

firebase.auth().signInWithPhoneNumber("+"+data.payload.phone_code + data.payload.phone_number)
                .then(confirmResult => {
                    console.log("phone number process>>>>>>>>",confirmResult);
                    // const result = await confirmResult
                    resolve(confirmResult)
                    // this.props.navigation.navigate("Verification",{confirmation:confirmResult})
            })
                .catch(error => {
                    console.log("phone number catch>>>>>>>>>",error);
                    reject(error)
            })
        })
} 
