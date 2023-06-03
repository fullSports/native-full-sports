import { StyleSheet } from "react-native";
import { GlobalColors } from "../../utils/styles/global-colors";

export const DefaultButtonsStyles = StyleSheet.create({
  welcome_btn_green: {
    borderRadius: 8,
    borderWidth: 0,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalColors.neon_green,
  },
  welcome_btn_green_txt: {
    color: GlobalColors.white,
    textTransform: "uppercase",
    // fontFamily: "Arial",
    fontSize: 12,
  },
  welcome_btn_white: {
    borderRadius: 8,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalColors.white,
    borderColor: GlobalColors.light_grey,
    borderWidth: 1,
  },
  welcome_btn_white_txt: {
    color: GlobalColors.light_grey,
    textTransform: "uppercase",
    fontSize: 12,
    // fontFamily: "Arial",
  },
});
