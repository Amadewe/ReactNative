import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, ScrollView } from 'react-native';

/*import nouvelle dépendance pour récupèrer la date du jour*/
import { format } from 'date-fns';
/*import nouvelle dépendance pour id*/
import {uniqueId } from 'lodash';

/*Incluons les imports de storage.js dans notre application*/
import { getAllBillets, setBillet } from '../helpers/storage';

/* import billets from './constants/billets.js' Cet import devient obsolète */
/*import billets from './constants/billets';*/
import Billet from '../components/billet.js';
import BilletBox from '../components/billetBox.js';

/*import AppStyles from './styles/App.styles.js';*/
import AccueilStyle from '../styles/Accueil.styles.js'

class Accueil extends Component {


/* Notre state charge désormais un tableau vide */
state = { billets:[] }

/* Cette fonction du lifecycle va s'exécuter avant que le composant se monte */
UNSAFE_componentWillMount(){
    this._getAllBillets()
}

/* Méthode asynchrone qui va récupérer la liste des billets avec la méthode importée. Fonction interne à la classe, à ne pas confondre avec la méthdoe importée */
_getAllBillets = async () => {
    const billets = await getAllBillets()
    this.setState({billets})
}

/*on crée une méthode privé qui va s'occuper de naviger vers notre nouvel écran BilletDetail. cette action prend en paramètre l'id du billet que l'on souhaite afficher en détail */
 _displayBilletDetail = (PropsBilletDetail) => {
    console.log('Détail du billet ayant pour ID : '+PropsBilletDetail._id)
}

/*_displayBilletDetail = (PropsBilletDetail) => {
    this.props.navigation.navigate("BilletDetail", PropsBilletDetail)
} */

/*on crée une méthode privée qui va mettre à jour notre state*/
_updateBillets = async newBillet => {
 await this.setState({
 billets: [{
 _id: uniqueId(),
 username: 'La Manu',
 titre: newBillet,
 billet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque magna justo, sodales ac felis eu, faucibus facilisis tellus. Nulla quis nulla nec velit porta cursus. Nullam quis mi sit amet sapien mattis vestibulum. Morbi a ornare augue, id ultrices metus. Donec ac tincidunt nunc, nec lobortis magna. Nullam pretium erat eget ligula pharetra pulvinar. Phasellus nisi neque, commodo ac nisl quis, placerat varius mi. Phasellus sed sem velit. In gravida lobortis finibus.',
image: 'https://lamanu.fr/wp-content/uploads/2019/10/logo_la_manu_formation_400.png',
/*format(new Date(), 'dd/MM/yyyy') erreur dans le tuto consernant le format de la date*/
date: format(new Date(), 'dd/MM/yyyy'),
/*nous allons utiliser le Spread Operator (les trois petits points) afin d’enregistrer le tout dans le state.*/
}, ...this.state.billets,
]})

/* On appelle la méthode importée afin d'enregistrer le nouveau billet dans le storage */
 setBillet(this.state.billets)
}

console.log(billets);
render() {
const {billets} = this.state
    return (
       <View style={AccueilStyle.container}>
           <BilletBox addBillet={this._updateBillets}/>
           <ScrollView>
           {billets.map(( props, index ) => (
               <Billet displayBilletDetail={this._displayBilletDetail}
                 key={index}
                 date={props.date}
                 username={props.username}
                 image={props.image}
                 titre={props.titre}
                 />
            ))}
          </ScrollView>
        </View>

     )
}
}

export default Accueil
