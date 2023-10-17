
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import React, {Component, useState} from 'react';


const Card = props => {

   const imageSource = require('../images/img.jpeg')

  return (
    <View style={styles.card_template}>
        <Image 
          style={styles.card_image}
          source={props.imageSource}
        />
        <View style={styles.text_container}>
            <Text style={styles.card_title}>{props.text}</Text>
        </View>
    </View>

  );
}

const styles = StyleSheet.create({
  card_template:{
    margin: 10,
    width: 250,
    height: 250,
    boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)"
  },
  card_image: {
    width: 250,
    height: 250,
    borderRadius : 10
  },
  text_container:{
    position: "absolute",
    width: 250,
    height: 30,
    bottom:0,
    padding: 5,
    backgroundColor: "rgba(0,0,0, 0.3)",
    borderBottomLeftRadius : 10,
    borderBottomRightRadius: 10
  },
  card_title: {
     color: "white",
  }
});

export default Card;
