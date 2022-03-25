import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, ScrollView } from "react-native";
import Home from "./src/screens/Home";
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <ScrollView style={{ backgroundColor: "black" }}>
        <StatusBar style="light" backgroundColor="#18191a" />
        <Home />
      </ScrollView>
    </Provider>
  );
}
