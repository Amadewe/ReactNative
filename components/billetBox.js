import React, {Component} from 'react';
import { View, Text, TextInput, Button, Keyboard} from 'react-native';
import styles from '../styles/BilletBox.styles.js';
/*à chaque saisie de l’utilisateur, onChangeText est déclenché, la méthode _handleChangeState est appelée, qui met à jour le state, et à chaque mise à jour du state,
on redéclenche la méthode render qui va prendre la nouvelle valeur de value qui est dans le state, ce qui nous permet de récupérer dans la props value la valeur de l’input.*/

class BilletBox extends React.Component {
/*state nous permet de gérer les données qui changent*/
    state = {
        value:'',
    }
    /*_handleChangeState est une méthode privé
    elle permet de changer la valeur du state et la valeur de l'input est égale à la valeur du state*/
    _handleChangeState = value => this.setState({value})

    _submitNewBillet = () => {
    const { value} = this.state
    const {addBillet} =this.props
        if(value.length > 0) {
        addBillet(value)
        }
        /*fonction Keyboard.dismiss() lorsque l’on valide via le bouton.*/
        /*réinitialisez le composant en passant une valeur vide à la méthode _handleChangeState*/
             Keyboard.dismiss()
                this._handleChangeState('')

    }



render() {
/*nous déstructurons value dans le render afin de récupérer dans la props la valeur du state*/
const {value} = this.state
    return (
        <View style={styles.BilletBox}>
        <TextInput style={styles.Input}
        /* maxLenght : indique la taille maximum de caractère que peut contenir l’input. */
            maxLenght={140}
            /* numberOfLines : on peut définir le nombre de ligne sur lequel l’input va s’afficher. */
            numberOfLines={4}
            /*onChangeText : ce prop va nous permettre de définir une méthode de rappel qui sera appelée lorsque le texte de l'input est modifié.
            Nous allons nous en servir afin de définir comment nous allons garder la valeur qui est tapé par l’utilisateur.*/
            onChangeText={this._handleChangeState}
            value={value}
            /* editable : indique que l’input est éditable. La valeur par défaut est true. */
            editable
            multiLine
         />
         <Button style={styles.Button}
             onPress={this._submitNewBillet}
             title="Ajouter un nouveau billet"
         />
        </View>
        )
    }

}
export default BilletBox