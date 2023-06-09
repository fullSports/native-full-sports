import { StyleSheet } from "react-native";
import { GlobalColors } from "../../../shared/utils/styles/global-colors";

export const DetalheStyles = StyleSheet.create({
  product_card_container: {
    position: "relative",
  },
  product_img_bg: {
    width: "100%",
    height: 380,
  },
  product_card_desc: {
    backgroundColor: GlobalColors.white,
    height: "100%",
    // borderTopLeftRadius: 80,
    // borderTopRightRadius: 80,
    padding: 10,
    paddingTop: 30,
    alignItems: "center",
    // elevation: 5,
  },
  product_card_row: {
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    justifyContent: "space-between",
  },
  product_card_col: {
    marginVertical: 15,
    flexDirection: "column",
    alignItems: "flex-start",
    width: "90%",
    justifyContent: "flex-start",
  },
  tags_container: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 10,
  },
  tag_categories: {
    backgroundColor: GlobalColors.input_bg,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 10,
    borderRadius: 100,
  },
  product_card_title: {
    textTransform: "uppercase",
    fontSize: 16,
    fontWeight: "700",
    color: GlobalColors.light_black,
  },
  product_card_price: {
    fontSize: 28,
    fontWeight: "700",
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
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  // qtd_select_input: {
  //   width: 120,
  //   height: 35,
  //   borderWidth: 1,
  //   borderColor: GlobalColors.input_placeholder,
  //   borderRadius: 4,
  //   backgroundColor: GlobalColors.white,
  // },

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
  desc_info_container: {
    flexDirection: "column",
    marginVertical: 5,
  },
  product_card_desc_title: {
    textAlign: "left",
    textTransform: "uppercase",
    width: "100%",
    marginVertical: 5,
    marginHorizontal: 5,
    fontSize: 13,
    fontWeight: "700",
    color: GlobalColors.light_grey,
  },
  product_card_desc_txt: {
    textAlign: "justify",
    marginVertical: 5,
    fontSize: 12,
    color: GlobalColors.light_grey,
  },
  desc_info_title: {
    color: GlobalColors.light_grey,
    fontWeight: "600",
    fontSize: 13,
  },
  desc_info: {
    flexDirection: "row",
    color: GlobalColors.light_grey,
    gap: 5,
  },
});
