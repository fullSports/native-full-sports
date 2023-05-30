import { StyleSheet } from "react-native";
import { GlobalColors } from "../../utils/styles/global-colors";

export const DefaultButtonsStyles = StyleSheet.create({
  welcome_btn_green: {
    borderRadius: 8,
    borderWidth: 0,
    textTransform: "uppercase",
    fontFamily: "Arial",
    fontSize: 12,
    minWidth: 330,
    maxWidth: 340,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalColors.neon_green,
    color: GlobalColors.white,
  },
  welcome_btn_white: {
    borderRadius: 8,
    textTransform: "uppercase",
    fontSize: 12,
    fontFamily: "Arial",
    minWidth: 330,
    maxWidth: 340,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    color: GlobalColors.light_grey,
    backgroundColor: GlobalColors.white,
    borderColor: GlobalColors.light_grey,
    borderWidth: 1,
  },
});
