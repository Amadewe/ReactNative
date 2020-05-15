/*le fichier storage comprendra des méthodes permettant de stocker ou récupérer des valeurs de AsyncStorage.*/
import {AsyncStorage} from 'react-native';
import billets from '../constants/billets';

/*Méthode permettant de récupérer tous les billets*/
const getAllBillets = async() => {
    try {
    const value = await AsyncStorage.getItem('billets')

    if(!value)
    return billets
/* La méthode JSON.parse() analyse une chaîne de caractères JSON et construit la valeur JavaScript ou l'objet décrit par cette chaîne Ici, nous retournons le résultat */
    return JSON.parse(value)
     } catch (err) {
     /* Si une erreur survient, nous l'affichons dans la console */
      console.error('ASyncStorage Error', err)
     }
}



   /* Méthode permettant de stocker dans notre AsyncStorage un billet */
const setBillet = async allBillets => {
   try {
    /* La méthode JSON.stringify() convertit une valeur JavaScript en chaîne JSON. Optionnellement,
     elle peut remplacer des valeurs ou spécifier les propriétés à inclure si un tableau de propriétés a été fourni. Ici c'est notre cas, getAllBillets étant un tableau */
      return AsyncStorage.getItem('billets', JSON.stringify(getAllBillets))
      }
    catch (err) {
     /* Si une erreur survient, nous l'affichons dans la console */
      console.error('ASyncStorage Error', err)
      }
}
  export {
  getAllBillets,
  setBillet,
}