
import {
    StyleSheet,
    Text,
    View,
    Image,
    Modal,
    Animated,
  } from 'react-native';
  import React, {Component, useState} from 'react';
  
  
  
  const Card = props => {
  
    return (
        <Modal
        animated
        animationType="fade"
        visible={props.visible}
        transparent
        onRequestClose={() => this._handleDismiss()}>
        <View style={styles.overlay}>
            <Animated.View style={[styles.container, {top}]}>
                {props.children}
            </Animated.View>
        </View>
      </Modal>
  
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 12,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        flex: 1,
        justifyContent: 'flex-end',
    },
  });
  
  export default Card;
  

