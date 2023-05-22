import { StyleSheet } from "react-native";
import { GlobalColors } from "./src/shared/utils/styles/global-colors";

export const GlobalStyles = StyleSheet.create({
  home_banner: {
    width: "100%",
    height: 200,
  },
  sectionTitle: {
    textTransform: "uppercase",
    color: GlobalColors.light_grey,
    textAlign: "center",
    marginTop: 35,
    fontWeight: "600",
    fontSize: 18,
  },

  section_banner: {
    width: 370,
    height: 145,
    marginVertical: 35,
  },
  bottom_tab_txt: {
    fontSize: 10,
    fontWeight: "400",
  },
  bottom_tab_icon_active: {
    borderColor: GlobalColors.neon_green,
    borderWidth: 2,
    width: 100,
    height: 2,
    flexDirection: "row",
  },
  btn_hole: {
    backgroundColor: GlobalColors.white,
    borderColor: GlobalColors.darkBlue,
    color: GlobalColors.darkBlue,
    borderWidth: 2,
    borderRadius: 10,
    height: 45,
    width: "100%",
  },
});
