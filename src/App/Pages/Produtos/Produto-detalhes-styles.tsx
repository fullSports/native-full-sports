import { StyleSheet } from "react-native";
import { GlobalColors } from "../../../shared/utils/styles/global-colors";

export const DetalheStyles = StyleSheet.create({
  product_card_container: {
    position: "relative",
  },
  product_img_bg: {
    width: "100%",
    height: 400,
  },
  product_card_desc: {
    backgroundColor: GlobalColors.white,
    height: "100%",
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    padding: 10,
    paddingTop: 30,
    alignItems: "center",
    // position: "absolute",
  },
  product_card_row: {
    marginVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    justifyContent: "space-between",
  },
  product_card_title: {
    width: 200,
    fontSize: 18,
    fontWeight: "600",
    color: GlobalColors.light_grey,
  },
  product_card_price: {
    fontSize: 26,
    fontWeight: "600",
    color: GlobalColors.dark_green,
  },
  product_card_qtd_select: {
    flexDirection: "row",
    alignItems: "center",
  },
  qtd_select_btn_txt: {
    marginHorizontal: 5,
    color: GlobalColors.light_grey,
  },
  qtd_select_btn: {
    backgroundColor: GlobalColors.white,
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: GlobalColors.light_grey,
    fontWeight: "400",
    borderRadius: 4,
  },
  qtd_select_input: {
    width: 120,
    height: 30,
    borderWidth: 1,
    borderColor: GlobalColors.light_grey,
    borderRadius: 4,
  },
  product_card_desc_title: {
    textAlign: "left",
    width: "100%",
    marginVertical: 5,
    fontSize: 11,
    fontWeight: "bold",
    color: GlobalColors.light_grey,
  },
  product_card_desc_txt: {
    textAlign: "justify",
    fontSize: 10,
    color: GlobalColors.light_grey,
  },
  product_card_buy_btn: {
    backgroundColor: GlobalColors.darkBlue,
    color: GlobalColors.white,
    borderWidth: 0,
    borderRadius: 6,
    height: 45,
    width: "100%",
  },
  product_card_buy_add_cart: {
    backgroundColor: GlobalColors.white,
    borderColor: GlobalColors.darkBlue,
    color: GlobalColors.darkBlue,
    borderWidth: 2,
    borderRadius: 6,
    height: 45,
    width: "100%",
  },
});
