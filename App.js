import React, { Component } from 'react';
//importer une fonction React Native qui se nomme Image
import {StyleSheet, Text, View, Image } from 'react-native';

import Accueil from './components/Accueil.js';

import Navigation from './Navigation/navigation.js'



/* API externe se nommant React Navigation.
d'appeler la ou les fonctions depuis la librairie react-navigation-stack.
importer la fonction createStackNavigator :
import { createStackNavigator } from 'react-navigation-stack'*/

export default class App extends Component {

    render() {
        return (
       <Navigation/>
         )
    }

}
