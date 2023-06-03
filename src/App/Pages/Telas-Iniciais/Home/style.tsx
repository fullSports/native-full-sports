import { StyleSheet } from "react-native";

export const homeStyle = StyleSheet.create({
  homeView: {
    // margin: 10,
  },
  cardSlider: {
    marginLeft: 15,
    flexDirection: "row",
    gap: 10,
    overflow: "scroll",
    paddingVertical: 10,
  },
  home_banner: {
    width: "100%",
    height: 200,
  },
  home_banner_container: {
    alignItems: "center",
    justifyContent: "center",
  },
  section_shoes_cards: {},
  section_banner: {
    width: 370,
    height: 180,
    marginVertical: 35,
  },
});
