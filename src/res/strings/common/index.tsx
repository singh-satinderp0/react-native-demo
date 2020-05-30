import LocalizedStrings from 'react-native-localization';
export const DEFAULT_LANGUAGE = 'en';

const translations = new LocalizedStrings({
    en: {
        APP_NAME: 'Buddy Finder',
        SCAN_QR: "Scan QR",
        RESPORT_MSG:"If you have any issue regarding the vehicle.Please ",
        REPORT_HERE:"Report here",
        DISTANCE:"Distance",
        DURATION:"Duration",
        STOP:"Stop",
        STOP_RIDE:"Stop Ride",
        CANCEL:"Cancel",
        RIDE_STARTED:"Ride Started",
        RIDE_START_MSG:"Your ride has been started.You can add your destination location for navigation",
        OKAY:"Okay",
        MAKE_YOUR_PAYMENT:"Make your payment",
        APPLY_VOUCHER_CODE:"Apply Voucher Code",
        DISCOUNT:"Discount",
        TOTAL_AMOUNT:"Total amount",
        MAKE_PAYMENT:"Make Payment",
        SEND_FEEDBACK:"Send us your feedback !",
        HOW_SATISFY: "How satisfy are you with us?",
        FEEDBACK_PLACEHOLDER: "Tell us your feedback(optional)",
        SUBMIT:"Submit",
        ENTER_CODE_PLACEHOLDER:"Enter your code here"
    },
    de: {
        APP_NAME: 'Buddy Finder',
    }
  });
  
  export default translations
