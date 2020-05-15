import React, {Component} from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/Billet.styles.js'

class Billet extends Component {

    render() {
        return (
            <View style={styles.Billet}>
                <View style={styles.left}>
                    <TouchableOpacity onPress={() => { console.log(displayBilletDetail(...this.props)) }}>
                        <Image source={{ uri: this.props.image }} style={styles.image} style={{ width: 100, height: 100 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.right}>
                    <View style={styles.top}>
                        <Text style={styles.date}>{this.props.date}</Text>
                        <Text style={styles.username}>{this.props.username}</Text>
                    </View>
                    <View style={styles.bottom}>
                        <Text style={styles.titre}>{this.props.titre}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default Billet