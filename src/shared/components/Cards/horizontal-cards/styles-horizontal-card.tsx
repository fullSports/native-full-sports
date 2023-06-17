import { StyleSheet } from "react-native";
import { GlobalColors } from "../../../utils/styles/global-colors";

export const styleCardH = StyleSheet.create({
  cardHorizontal: {
    width: 180,
    minHeight: 100,
    margin: 3,
    backgroundColor: GlobalColors.white,
    borderRadius: 3,
    flex: 1,
    flexDirection: "row",
    elevation: 3,
    overflow: "hidden",
  },
  cardPicCover: {
    height: "100%",
    width: 80,
  },
  cardHDesc: {
    flex: 1,
    flexDirection: "column",
    textAlign: "left",
    justifyContent: "center",
    paddingLeft: 15,
    paddingRight: 5,
  },
  cardHTile: {
    fontSize: 16,
    color: GlobalColors.light_grey,
  },
  cardHPreco: {
    fontSize: 16,
    color: GlobalColors.dark_green,
    fontWeight: "600",
  },
  cardHParcela: {
    fontSize: 10,
    color: GlobalColors.black,
  },
  cardHButton: {
    height: 25,
    justifyContent: "center",
    width: 70,
    marginVertical: 10,
    borderColor: GlobalColors.black,
    borderWidth: 1,
    borderRadius: 3,
    elevation: 2,
  },
  cardHButtonText: {
    color: GlobalColors.black,
  },
});
