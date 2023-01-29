import { ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
 
 function StyledButton() {
   return (
    <View style={styles.container}>
     <Pressable 
     style={styles.button}
     onPress={()=>{
        console.warn("You clicked on Custom order")
     }}> 
        <Text style={styles.textItem}>Custom Order</Text>
     </Pressable>
     </View>
   )
 }
 
 export default StyledButton

 const styles = StyleSheet.create({
    container:{
        width:'100%',
        padding:10,
    },
    button:{
        backgroundColor:'white',
        height:40,
        borderRadius:20,
        justifyContent:"center",
        alignItems: "center"
    },
    textItem:{
        fontSize:14,
        fontWeight: "500",
        textTransform:"uppercase"
    }
 })