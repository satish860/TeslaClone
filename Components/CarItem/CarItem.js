import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import StyledButton from "../Button/StyledButton";

function CarItem() {
  return (
    <View style={styles.carcontainer}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/images/ModelS.jpeg")}
      ></ImageBackground>
      <Text style={styles.titles}>Model S</Text>
      <Text style={styles.subTitle}>Starting at $64290</Text>
      <View style={styles.buttonContainer}>
        <StyledButton text="Custom order" type="primary"></StyledButton>
        <StyledButton text="Existing Inventory" type="secondary"></StyledButton>
      </View>
    </View>
  );
}

export default CarItem;

const styles = StyleSheet.create({
  carcontainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },

  titles: {
    marginTop: 40,
    fontSize: 40,
    fontWeight: "500",
  },
  subTitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    resizeMode: "contain",
  },
  buttonContainer: {
    width: "100%",
    position: "absolute",
    bottom: 50,
  },
});
