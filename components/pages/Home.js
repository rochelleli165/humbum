import * as React from 'react';
import { StyleSheet, Text, View , ScrollView, SafeAreaView, Modal} from 'react-native';
import Card from '../Card.js';
import CardOne from '../CardOne.js';
import AnswerCard from '../AnswerCard.js';
import {useFonts, Roboto_700Bold } from '@expo-google-fonts/roboto';


function Home() {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
    
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>This is Some Title</Text>
       <ScrollView horizontal={true} style={styles.container}>
        <Card text="Sailing is fun."  imageSource={require('../../images/sailing1.jpeg')}></Card>
        <Card text="These cards are customizable." imageSource={require('../../images/sailing2.jpeg')}></Card>
        <Card text="How to do that, who knows." imageSource={require('../../images/sailing3.jpeg')}></Card>
       </ScrollView>

       <AnswerCard/>
       <CardOne></CardOne>
       <CardOne></CardOne>
    
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddf2f4'
  },
  title: {
    fontFamily: 'Roboto_700Bold',
    margin: 10,
    fontSize: 30,
    color: '#a15d98',
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default Home;