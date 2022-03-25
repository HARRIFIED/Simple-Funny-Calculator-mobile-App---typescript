import React from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  TextInput,
  Pressable,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Screen(props: any) {
  const { screenHeight } = props;

  return (
    <View
      style={{
        backgroundColor: "black",
        height: screenHeight,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          marginTop: 40,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ marginLeft: 15, fontSize: 17, color: "white" }}>
          RAD
        </Text>

        <Image
          source={require("../../assets/icons/dots.png")}
          style={{
            resizeMode: "contain",
            width: 40,
            height: 20,
            tintColor: "white",
          }}
        />
      </View>

      <View style={{ marginLeft: 229, marginTop: 15 }}>
        <Text style={{ color: "white", fontSize: 50 }}>500+2</Text>
      </View>

      <View style={{ marginLeft: 300, marginTop: 10 }}>
        <Text style={{ color: "#aba6a6", fontSize: 35 }}>502</Text>
      </View>
    </View>
  );
}
