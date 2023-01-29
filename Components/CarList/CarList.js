import React from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Dimensions
} from "react-native";
import Cars from "../../Cars";
import CarItem from "../CarItem/CarItem";

function CarList() {
  return (
    <View style={styles.listcontainer}>
    <FlatList
      data={Cars}
      snapToAlignment={"start"}
      decelerationRate={"fast"}
      showsVerticalScrollIndicator={false}
      snapToInterval={Dimensions.get('window').height}
      renderItem={(item) => {
        return <CarItem car={item.item}/>
      }}>

      </FlatList>
    </View>
  );
}

export default CarList;

const styles = StyleSheet.create({
    listcontainer:{
        width:"100%"
    }
});
