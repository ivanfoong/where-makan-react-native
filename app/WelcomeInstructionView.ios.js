import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

class WelcomeInstructionView extends Component {
  render() {
    return (
      <Text style={styles.instructions}>
        Press Cmd+R to reload,{'\n'}
        Cmd+D or shake for dev menu
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