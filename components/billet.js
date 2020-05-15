import React, {Component} from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/Billet.styles.js'
class Billet extends Component {
_BilletDetail = () => {
    const {PropsBilletDetail} =this.props
  }
 /* const Billet = ({ date, titre, billet, username, image, left, right, bottom, top, onPress}) */

render() {
return (
<View style={styles.Billet}>
  <View style={styles.left}>
    <TouchableOpacity onPress={displayBilletDetail({...this.props})} >
        <Image source={{uri: this.props.image}} style={styles.image} style={{ width: 150, height: 150}} />
       </TouchableOpacity>
   </View>
   <View style={styles.right}>
        <View style={styles.top}>
            <Text style={styles.date}>{this.props.date} </Text>
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