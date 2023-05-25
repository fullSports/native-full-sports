import { StyleSheet } from "react-native";
import { GlobalColors } from "../../../shared/utils/styles/global-colors";

export const CadastroUsuarioStyles = StyleSheet.create({
  form_row_1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  form_row_2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    gap: 10,
  },
  form_item_row: {
    width: "100%",
  },
  form_item_row_2: {
    width: "48%",
  },
  form_label: {
    fontSize: 13,
    fontWeight: "600",
    color: GlobalColors.input_placeholder,
    paddingVertical: 10,
  },
  form_input_text: {
    width: "100%",
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: GlobalColors.neon_green,
    backgroundColor: GlobalColors.input_bg,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    paddingHorizontal: 15,
    color: GlobalColors.light_black,
  },
  logo_header: {
    height: 80,
    width: 110,
    alignSelf: "center",
  },
  has_account_link: {
    fontSize: 12,
    textDecorationLine: "underline",
    color: GlobalColors.light_grey,
    textAlign: "center",
  },
});
