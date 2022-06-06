import React from 'react'
import { StyleSheet, Image, Text, View, ScrollView } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { leftBarSelect } from "../redux/Actions";
import MaximizeIcon from '../assets/svgIcons/MaximizeIcon';

function LeftBar() {
    const leftBarData = useSelector((state) => state.leftBar);
    const leftBarSelectedId = useSelector((state) => state.leftBarSelectedId);
    const dispatch = useDispatch();
    const leftBarSelecT = (id) => {
        dispatch(leftBarSelect(id));
    };
    return (
        <View style={styles.leftBar}>
            <Image source={require("../assets/logo/logo.png")}  style={{ width: '100%', height: 100}}/>
            <ScrollView style={styles.leftBarItems}>
                {
                    leftBarData.map((item)=>{
                        return(
                            <View style={ item.id === leftBarSelectedId? [styles.leftBarItem, styles.leftBarItemSelected] : styles.leftBarItem}
                                onTouchEnd = { () => leftBarSelecT(item.id) }
                                key = { 'leftBar'+item.id }
                            >
                                {item.icon}
                                <Text style={styles.leftBarItemText}>{item.title}</Text>
                            </View>
                        )
                    })
                }
                <View style={styles.leftBarMiddleLine}></View>
                <View style={ leftBarSelectedId === 8 ? [styles.leftBarItem, styles.leftBarItemSelected] : styles.leftBarItem}
                    onTouchEnd = { () => leftBarSelecT(8) }
                >
                    <MaximizeIcon />
                    <Text style={styles.leftBarItemText}>Connections</Text>
                </View>
                <View style={styles.someSpace}></View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    leftBar: {
      backgroundColor: 'black',
      minWidth: 200,
      flex: 1,
    },
    leftBarLogoTop: {
      fontSize: 30,
      fontWeight: Platform.OS === 'android' ? 'normal' : '800',
      alignSelf: "stretch",
      textAlign: 'center',
    },
    leftBarLogoDown: {
      fontSize: 7,
      fontWeight: Platform.OS === 'android' ? 'normal' : '800',
      alignSelf: "stretch",
      textAlign: 'center',
    },
    leftBarItems: {
      paddingRight: 10,
    },
    leftBarItem: {
      flexDirection: "row",
      alignItems: 'center',
      paddingLeft: 20,
      paddingTop: 7,
      paddingBottom: 7,
      marginTop: 5,
      marginBottom: 5,
    },
    leftBarMiddleLine: {
      height: 1,
      backgroundColor: 'white',
      width: '60%',
      alignSelf: 'center',
      marginTop: 30,
      marginBottom: 30,
    },
    someSpace: {
      height: 50,
    },
    leftBarItemSelected: {
      backgroundColor: 'grey',
      borderBottomRightRadius: 30,
      borderTopRightRadius: 30,
    },
    leftBarItemText: {
      color: 'white',
      marginLeft: 10,
    },
});

export default LeftBar