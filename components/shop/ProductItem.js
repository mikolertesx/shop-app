import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

import Card from "../UI/Card";

const ProductItem = ({
  image,
  title,
  price,
  onSelect,
  onAddToCart,
  children,
}) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <Card style={styles.product}>
      <View style={styles.touchable}>
        <TouchableCmp onPress={onSelect} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image source={{ uri: image }} style={styles.image} />
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.price}>${price ? price.toFixed(2) : ""}</Text>
            </View>
            <View style={styles.actions}>{children}</View>
          </View>
        </TouchableCmp>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  product: {
    height: 300,
    margin: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  touchable: {
    overflow: "hidden",
    borderRadius: 10,
  },
  details: {
    alignItems: "center",
    height: "17%",
    padding: 10,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    marginVertical: 2,
  },
  price: {
    fontFamily: "open-sans",
    fontSize: 14,
    color: "#888",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "23%",
    paddingHorizontal: 20,
  },
});

export default ProductItem;
