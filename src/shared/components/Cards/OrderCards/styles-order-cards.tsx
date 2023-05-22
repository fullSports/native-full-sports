import { StyleSheet } from "react-native";
import { GlobalColors } from "../../../utils/styles/global-colors";

export const OrderCardStyles = StyleSheet.create({
  card_container: {
    width: "95%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    elevation: 10,
    alignSelf: "center",
    marginVertical: 5,
    backgroundColor: GlobalColors.white,
  },
  visible: {
    height: 0,
    opacity: 0,
  },
  expanded_card_container: {
    // height: 130,
  },
  card_arrow: {
    height: "100%",
    width: 30,
    justifyContent: "flex-end",
  },
  card_product_photo: {
    height: 95,
    width: 95,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  carD_details_txt: {
    gap: 5,
  },
  card_product_name: {
    fontSize: 16,
    fontWeight: "600",
    color: GlobalColors.light_black,
  },
  card_info_txt: {
    fontSize: 12,
    color: GlobalColors.light_grey,
  },
  card_product_price: {
    color: GlobalColors.dark_green,
    fontSize: 18,
    fontWeight: "bold",
  },
  card_expanded_detailhes: {
    flexDirection: "column",
    width: "100%",
    paddingHorizontal: 15,
  },
  card_expanded_txt_container: {
    borderTopColor: GlobalColors.bg_light_grey,
    borderBottomColor: GlobalColors.bg_light_grey,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
    gap: 10,
  },
  card_expanded_detailhes_col: {
    flexDirection: "row",
    gap: 5,
  },
  card_expanded_status_btn_container: {
    flexDirection: "column",
  },
  card_expanded_status: {
    backgroundColor: "#FDFF9B",
    borderRadius: 10,
    marginBottom: 15,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  card_expanded_status_txt: {
    textTransform: "uppercase",
    fontSize: 12,
  },
  card_expanded_btn: {
    backgroundColor: GlobalColors.white,
    borderColor: GlobalColors.darkBlue,
    color: GlobalColors.darkBlue,
    borderWidth: 2,
    borderRadius: 10,
    height: 45,
    width: "100%",
    marginTop: 15,
  },
  //   card_expanded_detailhes_txt:{

  //   }
});
