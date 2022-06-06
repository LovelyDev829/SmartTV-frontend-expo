import React from 'react'
import { StyleSheet, Image, Text, View, ScrollView } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { FlatGrid } from 'react-native-super-grid';

function MainScreen() {
    const MainScreenData = useSelector((state) => state.MainScreen);
    const leftBarSelectedId = useSelector((state) => state.leftBarSelectedId);
    return (
        <FlatGrid
            itemDimension={100}
            data={MainScreenData[leftBarSelectedId-1]?.list}
            style={styles.MainScreen}
            spacing={20}
            renderItem={({ item }) => (
                <View style={styles.MainScreenItemCard}>
                    <Image source={item.image} style={styles.MainScreenItemCardImage}/>
                    <View style={styles.MainScreenItemTextDiv}>
                        <Text style={styles.MainScreenItemTextTop}>{item.title}</Text>
                        <Text style={styles.MainScreenItemTextBottom}>{item.date}</Text>
                    </View>
                </View>
            )}
        />
    )
}

const styles = StyleSheet.create({
    // someSpace: {
    //   height: 500,
    // },
    MainScreen: {
        width: '75%',
    },
    MainScreenItemCardImage: {
      width: '100%',
      height: 135,
      alignSelf: 'center',
      borderTopRightRadius: 7,
      borderTopLeftRadius: 7,
    },
    MainScreenItemTextDiv: {
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.51)',
      paddingLeft: 10,
      paddingTop: 2,
      paddingBottom: 10,
      borderBottomRightRadius: 7,
      borderBottomLeftRadius: 7,
    },
    MainScreenItemTextTop: {
      fontSize: 10,
    },
    MainScreenItemTextBottom: {
      fontSize: 5,
    },
});
  
export default MainScreen