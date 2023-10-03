import { StyleSheet } from "react-native";

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "white",
    // paddingTop: 100,
  },
  head: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: "row",
    flex: 1,
  },
  headContent: {
    width: "50%",
    justifyContent: "center",
    // backgroundColor: "grey",
    // alignItems: "center",
  },
  logo: {
    fontSize: 20,
    fontWeight: "300",
  },
  content: {
    flex: 2,
    // alignItems: "center",
    marginHorizontal: "1%",
  },
  popular: {
    // width: "96%",
  },
  tab: {
    height: 200,
    width: "100%",
    backgroundColor: "gray",
    alignSelf: "center",
    marginBottom: 5,
    borderRadius: 8,
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    // backgroundColor: "red",
  },
  navBtn: {
    paddingHorizontal: 20,
    paddingVertical: 2,
    marginVertical: 2,
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default homeStyles;
