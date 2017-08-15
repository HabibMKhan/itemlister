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
  StatusBar,
  Platform
} from 'react-native';
const styles = require('../../style');

const backgroundColor = 'coral';

export default class Toolbar extends Component {
  render() {
    return (
      <View>
        <View style={styles.statusBar}>
          <StatusBar
            backgroundColor="coral"
            color="coral"
            barStyle="light-content"
          />
        </View>
        <View style={styles.navbar}>
          <Text style={styles.navbarTitle}>
            {this.props.title}
          </Text>
        </View>
      </View>
      // <View style={styles.container}>
      //   <View style={[styles.statusBar, { backgroundColor }]}>
      //     <StatusBar translucent backgroundColor={backgroundColor} />
      //   </View>
      //   <View style={styles.navbar}>
      //     <Text style={styles.navbarTitle}>
      //       {this.props.title}
      //     </Text>
      //   </View>
      // </View>
    );
  }
}

AppRegistry.registerComponent('Toolbar', () => Toolbar);
