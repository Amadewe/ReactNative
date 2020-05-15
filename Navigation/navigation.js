/*import de la fonction createStackNavigator de la librairie react-navigation-stack.
elle permet de créer un StackNavigator.*/
import {createStackNavigator} from 'react-navigation-stack';
import Accueil from '../components/Accueil.js';
import BilletDetail from '../components/billetDetail.js';

/*la fonction createAppContainer de React Navigation permet d'utiliser StackNavigator et de l'afficher dans notre application*/
import { createAppContainer } from 'react-navigation';


/*Dans notre application, la vue principale correspond à notre component Accueil. Nous allons donc créer notre StackNavigator avec la vue du component Accueil et nous allons lui donner un nom*/
const AccueilStackNavigator = createStackNavigator({
    Accueil: {
        screen: Accueil,
        navigationOptions: {
            title: 'Accueil'
        }
    },

    BilletDetail: {
        screen: BilletDetail,
    }
})

/*initialisons notre AppContainer avec la navigation que l’on souhaite afficher dans l’application et exportons le tout pour le rendre accessible par les autres composants*/
export default createAppContainer(AccueilStackNavigator)