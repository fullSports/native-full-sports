import { StyleSheet } from "react-native";
import { GlobalColors } from "../../../utils/styles/global-colors";

export const CartCardsStyles = StyleSheet.create({
  card_container: {
    width: "95%",
    height: 105,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    elevation: 10,
    alignSelf: "center",
    marginVertical: 5,
    backgroundColor: GlobalColors.white,
  },
  card_align: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    gap: 10,
  },
  card_product_img: {
    height: 80,
    width: 80,
    borderRadius: 10,
  },
  card_delete_opt: {
    fontSize: 22,
    marginLeft: 20,
  },
  card_txt_info: {
    flexDirection: "column",
  },
});
