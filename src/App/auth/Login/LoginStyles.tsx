import { StyleSheet } from "react-native";
import { GlobalColors } from "../../../shared/utils/styles/global-colors";

export const LoginStyles = StyleSheet.create({
  LoginView: {
    flex: 1,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  LoginFormView: {
    width: "95%",
    backgroundColor: GlobalColors.white,
    paddingHorizontal: 20,
    paddingVertical: 50,
    borderRadius: 10,
  },
  LoginInputGroup: {
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: GlobalColors.bg_light_grey,
    height: 60,
    color: GlobalColors.black,
  },
  FormInputGroup: {
    marginVertical: 20,
  },
  HeaderTitle: {
    fontSize: 32,
    fontWeight: "600",
    color: GlobalColors.neon_green,
  },
  HeaderSubtitle: {
    marginVertical: 10,
  },
  LoginButton: {
    width: "100%",
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    backgroundColor: GlobalColors.neon_green,
  },
  EnabledButton: {
    color: GlobalColors.white,
    opacity: 1,
  },
  DisabledButton: {
    color: GlobalColors.white,
    opacity: 0.5,
  },
  LoginViewBottom: {
    width: "100%",
    textAlign: "center",
    position: "absolute",
    bottom: 0,
  },
  BottomTxtOption: {
    color: GlobalColors.light_grey,
    fontSize: 14,
  },
  TextLink: {
    margin: 5,
    fontSize: 14,
    textDecorationLine: "underline",
    color: GlobalColors.neon_green,
  },
  AlertStyle: {
    backgroundColor: GlobalColors.white,
  },
  AlertStyleText: {
    color: GlobalColors.light_grey,
  },
  AlertStyleTitle: {
    fontWeight: "600",
  },
  AlertStyleParagraph: {
    fontSize: 18,
  },
});
