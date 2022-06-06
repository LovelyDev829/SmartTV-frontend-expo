import React from 'react'
import { StyleSheet, Image, Text, View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

function ApplicationScreen() {
    return (
        <LinearGradient colors={['rgb(0,5,5)', 'rgb(2,252, 220)']}>
            
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      flexDirection: "row",
    },
});

export default ApplicationScreen