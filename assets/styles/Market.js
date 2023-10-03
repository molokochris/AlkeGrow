import { StyleSheet } from "react-native";

const marketStyles = StyleSheet.create({
  head: {
    backgroundColor: "red",
    paddingVertical: 10,
    alignItems: "center",
  },
  catalogue: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  product: {
    // justifyContent: "center",
    width: "48%",
    height: 250,
    marginHorizontal: "1%",
    marginVertical: "1%",
    alignItems: "center",
    backgroundColor: "blue",
  },

  itemImage: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  priceTag: {
    zIndex: 1,
    position: "absolute",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "yellow",
    top: "90%",
    // right: 5,
  },
});
export default marketStyles;
