import { StyleSheet } from "react-native";
import { GlobalColors } from "../../../../shared/utils/styles/global-colors";

export const WelcomeStyles = StyleSheet.create({
  welcome_screen_display: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  top_logo: {
    width: "100%",
    padding: 15,
  },
  welcome_illustrarion: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  top_logo_img: {
    height: 60,
    width: 90,
  },
  welcome_pic: {
    height: 210,
    width: 315,
  },
  welcome_options_container: {
    justifyContent: "center",
    alignItems: "center",
  },
  welcome_title: {
    fontSize: 32,
    color: GlobalColors.light_grey,
    fontWeight: "700",
    textAlign: "center",
    marginVertical: 8,
  },
  welcome_desc: {
    paddingVertical: 25,
    paddingHorizontal: 40,
    fontSize: 14,
    color: GlobalColors.light_grey,
    textAlign: "center",
    width: "100%",
  },
  welcome_btns_group: {
    flexDirection: "column",
    gap: 10,
    marginBottom: 30,
  },
  welcome_ignore: {
    fontSize: 12,
    textDecorationLine: "underline",
    color: GlobalColors.light_grey,
    textAlign: "center",
  },
});
