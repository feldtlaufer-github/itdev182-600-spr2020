import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Avatar from './components/Avatar';
import Constants from 'expo-constants';
import AuthorRow from './components/AuthorRow';

export default class App extends React.Component {
  
  render(){
    return (
      <View style={styles.container}>
        <AuthorRow
          fullname={'First Last'}
          linkText={'Comments'}
          onPressLinkText={() => {
            console.log('pressed link!');
          }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
  },
});
