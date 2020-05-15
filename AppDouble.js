import React from 'react';
//importer une fonction React Native qui se nomme Image
import {StyleSheet, Text, View, Image} from 'react-native';
import billets from './constants/billets'

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bonjour tout le monde test 3</Text>
                    <Text>{billets[0].username}</Text>
                    <Text>{billets[0].titre}</Text>
                    <Text>{billets[0].image}</Text>
                    <Image source={{uri: billets[0].image}} style={{height: 150, width: 150}}/>
                    <Text>{billets[0].id}</Text>
        </View>




                    <Text style={AppStyles.title}>Bonjour tout le monde test 3</Text>
                            <Text>{billets[0].username}</Text>
                            <Text>{billets[0].titre}</Text>
                            <Image source={{uri: billets[0].image}} style={{height: 150, width: 150}}/>
                            <Text>{billets[1].username}</Text>
                            <Text>{billets[1].titre}</Text>
                            <Image source={{uri: billets[1].image}} style={{height: 150, width: 150}}/>
                            <Text>{billets[2].username}</Text>
                            <Text>{billets[2].titre}</Text>
                            <Image source={{uri: billets[2].image}} style={{height: 150, width: 150}}/>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
    }
})

//            <Billet
//              titre={billets[1].titre}
//              date={billets[1].date}
//              username={billets[1].username}
//              image={billets[1].image}
//             />