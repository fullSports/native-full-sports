import { StyleSheet } from "react-native";
import { GlobalColors } from "../../../utils/styles/global-colors";

export const OrderCardStyles = StyleSheet.create({
  card_container: {
    width: 400,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 17,
    elevation: 3,
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
    width: 10,
    justifyContent: "flex-end",
  },
  card_product_photo: {
    height: 95,
    width: 95,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  carD_details_txt: {
    width: "70%",
    gap: 5,
  },

  card_expanded_detailhes: {
    paddingHorizontal: 15,
  },
  card_expanded_txt_container: {
    borderTopColor: GlobalColors.bg_light_grey,
    borderBottomColor: GlobalColors.bg_light_grey,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    marginTop: 10,
    justifyContent: "flex-start",
    alignContent: "flex-start",
    alignItems: "flex-start"
  },
  card_expanded_detailhes_col: {
    margin: 2,
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
});
