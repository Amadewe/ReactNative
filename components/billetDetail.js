import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import billetdetail from '../styles/BilletDetail.styles.js';

class BilletDetail extends React.Component {

    render() {
       return (
            <View style={billetdetail.main}>
                <Text>Détail du billet</Text>
            </View>
       )
    }
}

export default BilletDetail