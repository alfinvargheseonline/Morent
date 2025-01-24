import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { Polyline, Marker } from 'react-native-maps';

const MapRoute = () => {
  // Example coordinates for the route - replace with your actual route coordinates
  const routeCoordinates = [
    { latitude: 37.78825, longitude: -122.4425 },
    { latitude: 37.78825, longitude: -122.4314 },
    { latitude: 37.78795, longitude: -122.4314 },
    { latitude: 37.78795, longitude: -122.4305 },
  ];

  const initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        customMapStyle={mapStyle}
      >
        <Polyline
          coordinates={routeCoordinates}
          strokeColor="#4A89F3"
          strokeWidth={3}
        />
        <Marker
          coordinate={routeCoordinates[routeCoordinates.length - 1]}
          pinColor="#4A89F3"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

// Custom map style to match the light theme shown in the image
const mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#E6EEF6"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
];

export default MapRoute;