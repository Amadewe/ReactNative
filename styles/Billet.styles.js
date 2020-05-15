import {StyleSheet} from 'react-native';
import colors from './variables.js';
const BilletStyles = StyleSheet.create({
    Billet: {
        flexDirection: 'row',
        backgroundColor:
        'white',
        borderWidth: 0.5,
        borderColor: colors.lmBlue,
        marginBottom: 4,
        padding: 4,
        },
    right: {
        flex: 1,
        paddingLeft: 8,
    },
    top: {
        flexDirection: 'row',
    },
    image: {
        width: 50,
        height: 50,
    },
    date: {
        marginRight: 10,
    },
    titre: {
        fontWeight: 'bold',
    },
    username: {
        color: colors.lmDarkblue,
    }
  });
export default BilletStyles