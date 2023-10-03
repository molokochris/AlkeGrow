import { StyleSheet } from "react-native";

const chatStyles = StyleSheet.create({
  container: {
    paddingHorizontal: "1%",
    flex: 1,
  },
  head: {
    flexDirection: "row",
  },
  tab: {
    width: "50%",
    alignItems: "center",
    paddingVertical: 15,
  },
  chats: {
    borderWidth: 0.6,
    flex: 1,
  },
  profile: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 0.5,
    flexDirection: "row",
    alignItems: "center",
  },
  profImage: {
    width: 50,
    height: 50,
    backgroundColor: "grey",
    borderRadius: 100,
  },
  nameTab: {
    marginLeft: "20%",
  },
});

export default chatStyles;
