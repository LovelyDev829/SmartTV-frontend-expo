import React from 'react'
import { StyleSheet, Image, Text, View, ScrollView } from 'react-native';
import LeftBar from '../components/LeftBar';
import MainScreen from '../components/MainScreen';
import { LinearGradient } from 'expo-linear-gradient'
function VideoMenuScreen() {
    return (
        <LinearGradient colors={['rgb(0,5,5)', 'rgb(2,252, 220)']}
            style={styles.linearGradient} start={{x: 0, y: 0}} end={{x: 1.5, y: 3.0}}>
            <LeftBar />
            <MainScreen />
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      flexDirection: "row",
    },
});

export default VideoMenuScreen