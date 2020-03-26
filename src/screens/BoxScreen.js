import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
        <View style={styles.redBox} />
        <View style={styles.blueBox} />
      </View>
      <View style={{ justifyContent:"center", flexDirection:"row"}}>
        <View style={styles.greenBox} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {},
  redBox: {
    height: 75,
    width: 75,
    backgroundColor: "#ff1744"
  },
  greenBox: {
    height: 75,
    width: 75,
    backgroundColor: "#00e676"
  },
  blueBox: {
    height: 75,
    width: 75,
    backgroundColor: "#448aff"
  }
});

export default BoxScreen;
