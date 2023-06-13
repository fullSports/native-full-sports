import { StyleSheet } from "react-native";
import { GlobalColors } from "../../utils/styles/global-colors";

export const Styles = StyleSheet.create({
  acessibility_bar: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "7%",
    backgroundColor: GlobalColors.neon_green,
  },
  header_logo_actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    paddingHorizontal: 10,
    backgroundColor: GlobalColors.white,
  },
  logo_style: {
    width: 80,
    height: 30,
  },
  header_items_btn: {
    height: 80,
    width: 80,
  },
  header_actions: {
    flexDirection: "row",
  },
});
