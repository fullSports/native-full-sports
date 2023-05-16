import { StyleSheet } from "react-native";
import { GlobalColors } from "../../utils/styles/global-colors";

export const Styles = StyleSheet.create({
  acessibility_bar: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    height: 30,
    backgroundColor: GlobalColors.neon_green,
    paddingRight: 15,
  },
  header_logo_actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 70,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  logo_style: {
    width: 100,
    height: 50,
  },
  header_items_btn: {
    height: 80,
    width: 80,
  },
  header_actions: {
    flexDirection: "row",
  },
});
