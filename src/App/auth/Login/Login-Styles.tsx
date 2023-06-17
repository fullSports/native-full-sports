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
    flexDirection: "column",
    gap: 15,
  },
  HeaderTitle: {
    fontSize: 28,
    fontWeight: "600",
    color: GlobalColors.neon_green,
  },
  HeaderSubtitle: {
    marginVertical: 10,
    color: GlobalColors.input_placeholder,
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
    textAlign: "center",
    fontSize: 14,
  },
  TextLink: {
    margin: 5,
    fontSize: 14,
    textDecorationLine: "underline",
    color: GlobalColors.neon_green,
    textAlign: "center",
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

  input_btn: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: 50,
    borderTopRightRadius: 5,
    backgroundColor: GlobalColors.input_bg,
  },
  input_with_btn: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: GlobalColors.neon_green,
  },
});
