import { StyleSheet } from "react-native";

export const CarrinhoStyles = StyleSheet.create({
  btns_actions_container: {
    width: "90%",
    alignSelf: "center",
    position: "absolute",
    bottom: 0,
    flexDirection: "column",
    gap: 5,
  },

  screen_view: {
    height: "95%",
  },
  empty_cart_container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  empty_cart_img: {
    width: 220,
    height: 220,
    marginVertical: 20,
  },
});
