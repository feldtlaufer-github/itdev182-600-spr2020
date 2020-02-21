import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, Platform, } from 'react-native';
import SearchInput from "./components/SearchInput";

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={[styles.largeText, styles.textStyle]}>
        San Francisco
      </Text>
      <Text style={[styles.smallText, styles.textStyle]}>
        Light Cloud
      </Text>
      <Text style={[styles.largeText, styles.textStyle]}>
        24°
      </Text>
      <SearchInput placeholder="Search any city" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Regular" : "Roboto",
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
  smallText: {
    fontSize: 18,
  },
  textInput: {
    backgroundColor: '#666',
    color:"white",
    height: 40,
    width: 300,
    marginTop: 20,
    maginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: "center",
  },
});
