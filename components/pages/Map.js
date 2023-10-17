import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import {decode} from "@mapbox/polyline"; //please install this package before running!

const getDirections = async (startLoc, destinationLoc) => {
  try {
    const KEY = "AIzaSyDp_IQbSZeAB88PheU5zDi3C3CfBKro6Ks"; //put your API key here.
    //otherwise, you'll have an 'unauthorized' error.
    let resp = await fetch(
      `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&key=${KEY}`
    );
    let respJson = await resp.json();
    let points = decode(respJson.routes[0].overview_polyline.points);
    let coords = points.map((point, index) => {
      return {
        latitude: point[0],
        longitude: point[1]
      };
    });
    return coords;
  } catch (error) {
    return error;
  }
};

function Map() {
    const mapRef = useRef(null);

    const [coords, setCoords] = useState([]);

    useEffect(() => {
        //fetch the coordinates and then store its value into the coords Hook.
        getDirections("52.5200066,13.404954", "50.1109221,8.6821267")
            .then(coords => setCoords(coords))
            .catch(err => console.log("Something went wrong"));
    }, []);

    const initialRegion = {
        latitude: 52.5200066,
        longitude: 13.404954,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1
    };

    
    return (
        <View style={styles.container}>
        {/*Render our MapView*/}
        <MapView
            style={styles.map}
            //specify our coordinates.
            initialRegion={initialRegion}
            // onRegionChangeComplete={(region) => setRegion(region)}
        >  
            {coords.length > 0 && <Polyline coordinates={coords} />}
        </MapView>
         
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1, //the container will fill the whole screen.
        justifyContent: "flex-end",
        alignItems: "center",
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
});

export default Map;