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
    gap: 5,
  },
  form_item_row: {
    width: "100%",
  },
  form_item_row_2: {
    width: "50%",
  },
  form_label: {
    fontSize: 13,
    fontWeight: "600",
    color: GlobalColors.input_placeholder,
    paddingVertical: 10,
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
  input_with_btn: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: GlobalColors.neon_green,
  },
  input_btn: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: 50,
    borderTopRightRadius: 5,
    backgroundColor: GlobalColors.input_bg,
  },
  required_symbol: {
    color: "red",
  },
});
