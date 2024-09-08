import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function NavBar() {
    return (
        <>
            <View style={styles.NavBar}>
                <View style={styles.textContainer}>
                    <View style={styles.iconContainer}>
                        <Icon name="bars" size={20} color="#000" style={styles.icon} />
                    </View>
                    <View style={styles.textWrapper}>
                        <Text style={styles.textNavBar}>DELIVER TO</Text>
                        <Text>Hala Lab office</Text>
                    </View>
                </View>
                <View style={styles.iconContainerShop}>
                    <Icon name="shopping-bag" size={20} color="white" style={styles.icon} />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    // gestion de la nav bar
    NavBar: {
        flex: 1,
        padding: 20,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    // couleur du text deliver
    textNavBar: {
        color: 'orange',
    },

    // gestion des deux petits textes
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    textWrapper: {
        flexDirection: 'column',
        marginLeft: 10, // Espacement entre l'icône et le texte
    },

    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20, // Pour créer un cercle
        backgroundColor: '#ECF0F4', // Couleur de fond rouge
        justifyContent: 'center',
        alignItems: 'center',
    },

    iconContainerShop : {
        width: 40,
        height: 40,
        borderRadius: 20, // Pour créer un cercle
        backgroundColor: 'black', // Couleur de fond rouge
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },

    icon: {
        marginHorizontal: 10,
    },
});
