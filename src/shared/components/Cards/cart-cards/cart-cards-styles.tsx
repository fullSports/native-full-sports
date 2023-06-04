import { StyleSheet } from "react-native";
import { GlobalColors } from "../../../utils/styles/global-colors";

export const CartCardsStyles = StyleSheet.create({
  card_container: {
    width: "95%",
    height: 125,
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 15,
    elevation: 10,
    alignSelf: "center",
    marginVertical: 5,
    backgroundColor: GlobalColors.white,
  },
  card_align: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    paddingHorizontal: 15,
    gap: 10,
  },

  card_info_align: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  card_product_img: {
    height: 90,
    width: 90,
    borderRadius: 10,
  },
  card_delete_opt: {
    fontSize: 22,
    marginRight: 5,
  },
  card_info_title: {
    fontWeight: "600",
    color: GlobalColors.light_grey,
  },
  card_txt_info: {
    flexDirection: "column",
    gap: 6,
  },
  card_info_txt: {
    color: GlobalColors.light_black,
    fontSize: 13,
  },
  card_price_total: {
    color: GlobalColors.dark_green,
    fontSize: 17,
    fontWeight: "700",
  },
});
