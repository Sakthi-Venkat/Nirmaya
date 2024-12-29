import React from 'react';
import { Platform } from 'react-native';

let MapView;
if (Platform.OS === 'web') {
  // Use a different mapping library for web
  MapView = require('react-leaflet').Map; // Example for Leaflet
} else {
  // Use react-native-maps for mobile
  MapView = require('react-native-maps').default;
}

const MapComponent = (props) => {
  return (
    <MapView {...props} />
  );
};

export default MapComponent;
