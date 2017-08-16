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
  TouchableHighlight
} from 'react-native';
const styles = require('../../style');
const constants = styles.constants;

const backgroundColor = 'coral';

export default class AddButton extends Component {
  render() {
    return (
      <View style={styles.action}>
        <TouchableHighlight
          underlayColor="#24ce84"
          onPress={this.props.onPress}
        >
          <Text style={styles.actionText}>
            {this.props.title}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

AppRegistry.registerComponent('AddButton', () => AddButton);
