import React from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import Screen from "../components/Screen";
import Keyboard from "../components/Keyboard";

const windowHeight: number = Dimensions.get("window").height;
const screenHeight = windowHeight / 3;

export default function Home() {
  return (
    <View style={styles.container}>
      <Screen {...{ screenHeight }} />
      <Keyboard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
