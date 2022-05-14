import React from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { useDispatch } from "react-redux";
import {
  load_buttons,
  delete_value,
  get_result,
  clear_screen
} from "../redux/calculator/actions/actions";
import Keyboard2 from './Keyborad2'

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Keyboard() {
  const dispatch = useDispatch();

  return (
    <View
      style={{
        flexDirection: "row",
        height: windowHeight / 1.4,
       
      }}
    >
      <ScrollView
        style={{
          width: windowWidth / 1.6,
          backgroundColor: "#1b1b1c",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginTop: 40,
            justifyContent: "space-around",
          }}
        >
          <Pressable
            onPress={() => dispatch(load_buttons("7"))}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#434345" : "#1b1b1c",
                width: 60,
                height: 60,
                borderRadius: 60,
              },
            ]}
          >
            <Text style={styles.text}>7</Text>
          </Pressable>

          <Pressable
            onPress={() => dispatch(load_buttons("8"))}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#434345" : "#1b1b1c",
                width: 60,
                height: 60,
                borderRadius: 60,
              },
            ]}
          >
            <Text style={styles.text}>8</Text>
          </Pressable>

          <Pressable
            onPress={() => dispatch(load_buttons("9"))}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#434345" : "#1b1b1c",
                width: 60,
                height: 60,
                borderRadius: 60,
              },
            ]}
          >
            <Text style={styles.text}>9</Text>
          </Pressable>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 60,
            justifyContent: "space-around",
          }}
        >
          <Pressable
            onPress={() => dispatch(load_buttons("4"))}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#434345" : "#1b1b1c",
                width: 60,
                height: 60,
                borderRadius: 60,
              },
            ]}
          >
            <Text style={styles.text}>4</Text>
          </Pressable>

          <Pressable
            onPress={() => dispatch(load_buttons("5"))}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#434345" : "#1b1b1c",
                width: 60,
                height: 60,
                borderRadius: 60,
              },
            ]}
          >
            <Text style={styles.text}>5</Text>
          </Pressable>

          <Pressable
            onPress={() => dispatch(load_buttons("6"))}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#434345" : "#1b1b1c",
                width: 60,
                height: 60,
                borderRadius: 60,
              },
            ]}
          >
            <Text style={styles.text}>6</Text>
          </Pressable>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 60,
            justifyContent: "space-around",
          }}
        >
          <Pressable
            onPress={() => dispatch(load_buttons("1"))}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#434345" : "#1b1b1c",
                width: 60,
                height: 60,
                borderRadius: 60,
              },
            ]}
          >
            <Text style={styles.text}>1</Text>
          </Pressable>

          <Pressable
            onPress={() => dispatch(load_buttons("2"))}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#434345" : "#1b1b1c",
                width: 60,
                height: 60,
                borderRadius: 60,
              },
            ]}
          >
            <Text style={styles.text}>2</Text>
          </Pressable>

          <Pressable
            onPress={() => dispatch(load_buttons("3"))}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#434345" : "#1b1b1c",
                width: 60,
                height: 60,
                borderRadius: 60,
              },
            ]}
          >
            <Text style={styles.text}>3</Text>
          </Pressable>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 60,
            justifyContent: "space-around",
          }}
        >
          <Pressable
            onPress={() => dispatch(load_buttons("."))}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#434345" : "#1b1b1c",
                width: 60,
                height: 60,
                borderRadius: 60,
              },
            ]}
          >
            <Text style={styles.text}>.</Text>
          </Pressable>
          <Pressable
            onPress={() => dispatch(load_buttons("0"))}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#434345" : "#1b1b1c",
                width: 60,
                height: 60,
                borderRadius: 60,
              },
            ]}
          >
            <Text style={styles.text}>0</Text>
          </Pressable>

          <Pressable
            onPress={() => dispatch(get_result())}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#434345" : "#1b1b1c",
                width: 60,
                height: 60,
                borderRadius: 60,
              },
            ]}
          >
            <Text style={styles.text}>=</Text>
          </Pressable>
        </View>
      </ScrollView>

      <View
        style={{
          width: windowWidth / 4.5,
          backgroundColor: "#212120",
        }}
      >
        <Pressable
          onPress={() => dispatch(delete_value())}
          onLongPress={() => dispatch(clear_screen())}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#434345" : "#212120",
              width: 60,
              height: 60,
              borderRadius: 60,
              marginTop: 44,
              marginLeft: 15,
            },
          ]}
        >
          <Text style={styles.text2}>DEL</Text>
        </Pressable>

        <Pressable
          onPress={() => dispatch(load_buttons("/"))}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#434345" : "#212120",
              width: 60,
              height: 60,
              borderRadius: 60,
              marginTop: 30,
              marginLeft: 15,
            },
          ]}
        >
          <Text style={styles.text3}>÷</Text>
        </Pressable>

        <Pressable
          onPress={() => dispatch(load_buttons("*"))}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#434345" : "#212120",
              width: 60,
              height: 60,
              borderRadius: 60,
              marginTop: 30,
              marginLeft: 15,
            },
          ]}
        >
          <Text style={styles.text3}>×</Text>
        </Pressable>

        <Pressable
          onPress={() => dispatch(load_buttons("-"))}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#434345" : "#212120",
              width: 60,
              height: 60,
              borderRadius: 60,
              marginTop: 30,
              marginLeft: 15,
            },
          ]}
        >
          <Text style={styles.text3}>-</Text>
        </Pressable>

        <Pressable
          onPress={() => dispatch(load_buttons("+"))}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#434345" : "#212120",
              width: 60,
              height: 60,
              borderRadius: 60,
              marginTop: 30,
              marginLeft: 15,
            },
          ]}
        >
          <Text style={styles.text3}>+</Text>
        </Pressable>
      </View>
          <Keyboard2 />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#aba6a6",
    fontSize: 35,
    textAlign: "center",
  },

  text2: {
    color: "#b05d04",
    fontSize: 18,
    textAlign: "center",
  },

  text3: {
    color: "#b05d04",
    fontSize: 33,
    textAlign: "center",
  },
});
