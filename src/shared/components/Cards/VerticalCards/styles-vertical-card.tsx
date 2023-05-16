import { StyleSheet } from "react-native";
import { GlobalColors } from "../../../utils/styles/global-colors";

export const styleCardV = StyleSheet.create({
  cardVertical: {
    height: 310,
    width: 220,
    elevation: 40,
    borderRadius: 5,
    overflow: "hidden",

    backgroundColor: GlobalColors.white,
  },
  cardPicCover: {
    height: 220,
    width: "100%",
  },
  cardDescBottom: {
    padding: 10,
  },
  cardTitle: {
    color: GlobalColors.black,
    fontWeight: "600",
    fontSize: 18,
  },
  cardPreviousPrice: {
    textDecorationLine: "line-through",
    color: GlobalColors.black_opacity,
    marginVertical: 2,
    fontSize: 12,
  },
  cardPaymentDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardPrice: {
    color: GlobalColors.neon_green,
    fontWeight: "600",
    fontSize: 16,
  },
  cardPaymentTip: {
    fontSize: 11,
    opacity: 0.8,
    color: GlobalColors.black_opacity,
  },
});
