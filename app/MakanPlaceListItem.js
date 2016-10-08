import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import ItemCell from 'react-native-item-cell';

class MakanPlaceListItem extends Component {
  static defaultProps = {
    placeName: "",
    address: "",
  }
  static propTypes = {
    placeName: React.PropTypes.string.isRequired,
    address: React.PropTypes.string.isRequired,
  }
  state = {}

  render() {
    return (
      <ItemCell
        subtitle={this.props.address}
        showDisclosureIndicator={true}>
        {this.props.placeName}
      </ItemCell>
    );
  }
}

module.exports = MakanPlaceListItem;