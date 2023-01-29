import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

function StyledButton(props) {
  const { text,type } = props;
  const backgroundColor = type=='primary'?'white':'black'
  const textColor = type == 'primary'? '#171A20' : "#FFFFFF"
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button,{backgroundColor:backgroundColor}]}
        onPress={() => {
          console.warn("You clicked on Custom order");
        }}
      >
        <Text style={[styles.textItem,{color:textColor}]}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default StyledButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
  },
  button: {
    backgroundColor: "white",
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textItem: {
    fontSize: 14,
    fontWeight: "500",
    textTransform: "uppercase",
  },
});
