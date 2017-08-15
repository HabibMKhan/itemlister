'use strict'
let React = require('react-native');
let {
  StyleSheet,
  Platform
} = React;
const constants = {
  actionColor: '#3cb371' // Add Button Color
};

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;


module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2'
  },
  // Status Bar Styles
  // https://stackoverflow.com/questions/39297291/how-to-set-ios-status-bar-background-color-in-react-native
  statusBar: {
    height: STATUSBAR_HEIGHT,
    backgroundColor: '#14ab1b'
  },
  // appBar: {
  //   backgroundColor:'#fff',
  //   // backgroundColor:'#33373B',
  //   height: APPBAR_HEIGHT,
  // },
  // content: {
  //   flex: 1,
  //   backgroundColor: '#33373B',
  // },

  // Nav Bar Styles
  navbar: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'center',
    height: 44,
    flexDirection: 'row'
  },

  navbarTitle: {
    color: '#444',
    fontSize: 16,
    fontWeight: 'bold',
  },
  toolbar: {
    backgroundColor: '#fff',
    height: 22,
  },

  listView: {
    flex: 1
  },
  li: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  liContainer: {
    flex: 2
  },
  liText: {
    color: '#333',
    fontSize: 16
  }
});
