import { StyleSheet } from "react-native";
import { GlobalColors } from "../../../shared/utils/styles/global-colors";

export const StylePedidos = StyleSheet.create({
  pedidos_cards_container: {
    marginVertical: 20,
  },
  pedidos_screen_container: {
    marginVertical: 40,
    marginHorizontal: 5,
  },
  section_title: {
    fontSize: 18,
    fontWeight: "700",
    color: GlobalColors.darkBlue,
    marginHorizontal: 10,
  },
});
