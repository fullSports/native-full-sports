import { StyleSheet } from "react-native";
import { GlobalColors } from "../../../shared/utils/styles/global-colors";

export const categoriasStyles = StyleSheet.create({
  roupas_container: {
    marginVertical: 25,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  page_name: {
    fontSize: 18,
    fontWeight: "700",
    color: GlobalColors.darkBlue,
    marginVertical: 20,
    textAlign: "center",
  },
});
