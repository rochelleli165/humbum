
import {
    StyleSheet,
    Text,
    View,
    Image,
  } from 'react-native';
  import React, {Component, useState} from 'react';
  
  import { MaterialCommunityIcons } from '@expo/vector-icons';
  
  
  const Card = props => {
  
    const [liked, setLiked] = useState(false);

    return (
      <View style={styles.card_template}>
        <View>
            <Image 
                style={styles.card_image}
                source={require('../images/color.jpeg')}
            />
        </View>
        <View style={styles.text_container}>
            <Text style={styles.title}>Title</Text>
            <Text style={styles.description}>This is where the description lies. Blah blah blah... You can't write much in here though.</Text>
        </View>
        <View>
            <MaterialCommunityIcons 
                name="heart" 
                color={liked? '#a15d98': 'white'}
                size={25} 
                style={styles.icon}
                onPress={() => setLiked(!liked)}
            />
                
        </View>
       
      </View>
  
    );
  }

  
  
  const styles = StyleSheet.create({
    card_template:{
      margin: 10,
      height: 100,
      boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)",
      backgroundColor: '#4382bb',
      borderRadius: 10,
      flexDirection: 'row',
    },
    icon: {
        padding: 10,
    },
    card_image:{
      margin: 10,
      width: 80,
      height: 80,
      borderRadius: 10
    },
    text_container: {
      width: 260,
    },
    description: {
      color: 'white',
    },
    title:{
      color: 'white',
      fontWeight: '600',
      fontSize: 20,
      marginTop: 10,
    },
    card_title: {
       color: "white",
    }
  });
  
  export default Card;
  