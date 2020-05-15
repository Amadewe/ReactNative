import {StyleSheet} from 'react-native';
import colors from './variables.js';
const BilletBox = StyleSheet.create({
    BilletBox: {
        marginBottom:15,
        paddingLeft:8,
        paddingRight:8,
        backgroundColor: 'orange',
    },
    Input : {
        height: 45,
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: colors.lmDarkblue,
        borderRadius: 5,
        padding: 8,
        marginBottom: 15,
    },
    Button : {
    backgroundColor: colors.lmPrimary,
    }

  });
export default BilletBox