/*This is an example of React Native App Intro Slider */
import React from "react";
//import react in project
import { StyleSheet, View, Text, Image } from "react-native";
//import all the required component
import AppIntroSlider from "react-native-app-intro-slider";
//import AppIntroSlider to use it
import AppNavigator from "../navigation/AppNavigator";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false
      //To show the main page of the app
    };
  }
  _onDone = () => {
    this.setState({ showRealApp: true });
  };
  _onSkip = () => {
    this.setState({ showRealApp: true });
  };
  _renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: "center",
          justifyContent: "space-around",
          paddingBottom: 100
        }}
      >
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  render() {
    //If false show the Intro Slides
    if (this.state.showRealApp) {
      //Real Application
      return <AppNavigator />;
    } else {
      //Intro slides
      return (
        <AppIntroSlider
          slides={slides}
          renderItem={this._renderItem}
          onDone={this._onDone}
          showSkipButton={true}
          onSkip={this._onSkip}
        />
      );
    }
  }
}
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200
  },
  text: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    paddingVertical: 30
  },
  title: {
    fontSize: 25,
    color: "white",
    textAlign: "center",
    marginBottom: 16
  }
});

const slides = [
  {
    key: "s1",
    text: "Best Recharge offers",
    title: "Mobile Recharge",
    image: {
      uri:
        "https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png"
    },
    backgroundColor: "#20d2bb"
  },
  {
    key: "s2",
    title: "Flight Booking",
    text: "Upto 25% off on Domestic Flights",
    image: {
      uri:
        "https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_flight_ticket_booking.png"
    },
    backgroundColor: "#febe29"
  },
  {
    key: "s3",
    title: "Great Offers",
    text: "Enjoy Great offers on our all services",
    image: {
      uri:
        "https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_discount.png"
    },
    backgroundColor: "#22bcb5"
  }
];
