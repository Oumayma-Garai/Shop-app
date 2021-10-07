import React from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import Colors from "../../constants/Colors";
const ProductItem = (props) => {
  return (
    <View style={styles.product}>
      <Image source={{ uri: props.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{props.title} </Text>
        <Text style={styles.price}>{props.price}</Text>
      </View>

      <View style={styles.actions}>
        <Button
          color={Colors.primary}
          title="View details"
          onPress={props.onViewDetail}
        />
        <Button
          color={Colors.primary}
          title="To cart"
          onPress={props.onAddToCart}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    borderRadius: 10,
    backgroundColor: "white",
    margin: 20,
    height: 300,
  },
  details: {
    alignItems: "center",
    height: "15%",
    padding: 10,
  },
  image: { width: "100%", height: "60%" },
  title: { fontSize: 18, marginVertical: 4 },
  price: { fontSize: 14, color: "#888" },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "25%",
  },
});
export default ProductItem;
