import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";

const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title:"Haze",
        subtitle: "Don't go outside!"
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#F0F2F0", "#000C40"],
        title:"Thunderstorm",
        subtitle: "Be careful!!"
    },
    Drizzle: {
        iconName: "weather-pouring",
        gradient: ["#8e9eab", "#eef2f3"],
        title:"Drizzle",
        subtitle: "Enjoy the mood."
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#D3CCE3", "#E9E4F0"],
        title:"Rain",
        subtitle: "Get the umbrella."
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#00416A", "#E4E5E6"],
        title:"Snow",
        subtitle: "It's Snow!"
    },
    Atmosphere: {
        iconName: "weather-fog",
        gradient: ["#BE93C5", "#7BC6CC"],
        title:"Atmosphere",
        subtitle: "Take the mask."
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#108dc7", "#ef8e38"],
        title:"Clear",
        subtitle: "Good Weather"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#FFEFBA", "#FFFFFF"],
        title:"Clouds",
        subtitle: "Sky is Gray."
    },
    Mist: {
        iconName: "weather-sunset",
        gradient: ["#4CA1AF", "#C4E0E5"],
        title:"Mist",
        subtitle: "Keep the light"
    },
    Dust: {
        iconName: "weather-sunset-up",
        gradient: ["#F7F8F8", "#ACBB78"],
        title:"Dust",
        subtitle: "Oh my God~!"
    }
}

export default function Weather({ temp, condition }) {
    return(

        <LinearGradient colors={weatherOptions[condition].gradient} style={styles.constainer}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    color="white" 
                    size={96} 
                    name={weatherOptions[condition].iconName} />
                <Text style={styles.temp}>{temp}ºC</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    ); 
};

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Haze",
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds",
        "Mist",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
});

