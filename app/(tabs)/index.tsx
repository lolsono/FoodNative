import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavBar from '@/components/NavBar';

export default function HomeScreen() {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.navBarContainer}>
        <NavBar />
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.contentContainer}>
          <Text style={styles.textUtilisateur}>Hey Halal, Good Afternoon !</Text>
          <View style={styles.inputContainer}>
            <Icon name="search" size={15} color="#A0A5BA" style={styles.icon} />
            <TextInput
              style={styles.input}
              onChangeText={setText}
              value={text}
              placeholder="Search dishes, restaurants"
            />
          </View>
          <Text>All Categories</Text>
          <Text>Open Restaurants</Text>
          <Text>teste 1</Text>
          <Text>teste 1</Text>
          <Text>teste 1</Text>
          <Text>teste 1</Text>
          <Text>teste 1</Text>
          <Text>teste 1</Text>
          <Text>teste 1</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  //taille pour la navbar
  navBarContainer: {
    height: 49, 
    marginTop: 25,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  textUtilisateur: {
    fontSize: 16,
  },
  inputContainer: {
    border: 'none',
    borderRadius: 15,
    backgroundColor: '#F6F6F6',
    height: 62,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    fontSize: 14,
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
});
