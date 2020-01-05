import React from 'react';
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from 'react-native';
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "dd592a3f0684808c744a59f4149a7fdc";

export default class App extends React.Component {
  state = {
    isLoading: true
  };

  getWeather = async(latitude, longitude) => {
    //console.log(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
    const {data: 
            { main: {temp},
            weather
              }} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
              
              this.setState({isLoading:false, 
                    condition: weather[0].main, 
                    temp
                  });
  };
  
  getLoaction = async() => {
    try {
      await Location.requestPermissionsAsync();
      const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync();
      
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Cant't find you.", "So sad");
    }
  }
  
  componentDidMount() {
    this.getLoaction();
  }
  
  render() {
    const { isLoading, condition, temp } = this.state;
    return isLoading ? (
    <Loading /> )
    : (
      <Weather temp={Math.round(temp)} condition={condition}/>
      );
  }
}
