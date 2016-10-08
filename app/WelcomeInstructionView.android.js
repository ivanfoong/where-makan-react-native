import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

class WelcomeInstructionView extends Component {
  render() {
    return (
      <Text style={styles.instructions}>
        Double tap R on your keyboard to reload,{'\n'}
        Shake or press menu button for dev menu
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = WelcomeInstructionView;