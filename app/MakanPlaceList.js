import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ListView
} from 'react-native';
import MakanPlaceListItem from './MakanPlaceListItem';

class MakanPlaceList extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          placeName: "Place001",
          address: "Address001"
        },
        {
          placeName: "Place002",
          address: "Address002"
        }
      ]),
    };
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        contentInset={{top: 0}}
        automaticallyAdjustContentInsets={false}
        renderRow={(rowData) => <MakanPlaceListItem placeName={rowData.placeName} address={rowData.address} />}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efedf4',
    paddingTop: 20,
  },
})

module.exports = MakanPlaceList;