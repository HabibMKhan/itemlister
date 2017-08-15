/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';
const styles = require('./app/style');

import Toolbar from './app/components/Toolbar/Toolbar';

export default class itemlister extends Component {

  constructor() {
    super();
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      itemDataSource: ds
    };

    this.renderRow = this.renderRow.bind(this);
    this.pressRow = this.pressRow.bind(this);
  }

  componentWillMount() {
    this.getItems();
  }

  componentDidMount() {
    this.getItems();
  }

  getItems() {
    let items = [{title:'Item One'}, {title: 'Item Two'}];

    this.setState({
      itemDataSource: this.state.itemDataSource.cloneWithRows(items)
    });
  }

  pressRow() {
    console.log(item);
  }

  renderRow(item) {
    return(
      <TouchableHighlight onPress={() => {
        this.pressRow(item);
      }}>
        <View style={styles.li}>
          <Text style={styles.liText}>
            {item.title}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Toolbar title="ItemLister" />
        <ListView
          style={styles.listView}
          dataSource={this.state.itemDataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('itemlister', () => itemlister);
