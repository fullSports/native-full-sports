import { StyleSheet } from "react-native";
import { GlobalColors } from "../../utils/styles/global-colors";

export const DefaultButtonsStyles = StyleSheet.create({
  welcome_btn_green: {
    borderRadius: 8,
    borderStyle: "none",
    textTransform: "uppercase",
    fontSize: 12,
    width: "100%",
    height: 45,
    backgroundColor: GlobalColors.neon_green,
    color: GlobalColors.white,
  },
  welcome_btn_white: {
    borderRadius: 8,
    textTransform: "uppercase",
    fontSize: 12,
    width: 320,
    height: 45,
    color: GlobalColors.light_grey,
    backgroundColor: GlobalColors.white,
    borderColor: GlobalColors.light_grey,
    borderWidth: 1,
  },
});
