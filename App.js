import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MakanPlaceList from './app/MakanPlaceList'

class App extends Component {
  render() {
    return (
      <MakanPlaceList />
    );
  }
}

module.exports = App;