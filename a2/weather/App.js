import React from 'react';
import { StyleSheet, Text, ImageBackground, View, KeyboardAvoidingView, Platform, } from 'react-native';
import SearchInput from "./components/SearchInput";
import getImageForWeather from "./utils/getImageForWeather";

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      location: "San Francisco",
    };
  }
  handleUpdateLocation = city => {
    this.setState({
      location: city,
    });
  };

  render(){
    const{ location } = this.state;
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="height">
  
        <ImageBackground
          source={getImageForWeather("Clear")}
          style={styles.imageContainer}
          imageStyle={styles.image}>
  
          <View style={styles.detailsContainer}>
  
            <Text style={[styles.largeText, styles.textStyle]}>
              {location}
            </Text>
  
            <Text style={[styles.smallText, styles.textStyle]}>
              Light Cloud
            </Text>
  
            <Text style={[styles.largeText, styles.textStyle]}>
              24°
            </Text>
  
            <SearchInput
              placeholder="Search any city"
              onSubmit={this.handleUpdateLocation} />
  
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Regular" : "Roboto",
    color: "white",
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
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: "center",
  },
});
