import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import CarItem from "./Components/CarItem/CarItem";
import CarList from "./Components/CarList/CarList";
import Header from "./Components/Header/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <CarList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
