import { StyleSheet } from "react-native";
import { GlobalColors } from "../../../utils/styles/global-colors";

export const styleSmallCardV = StyleSheet.create({
  cardVertical: {
    height: 315,
    width: 180,
    elevation: 3,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: GlobalColors.white,
  },
  cardPicCover: {
    height: 200,
    width: "100%",
  },
  cardDescBottom: {
    padding: 10,
  },
  cardTitle: {
    color: GlobalColors.black,
    fontWeight: "600",
    fontSize: 13,
    textTransform: "uppercase",
    marginBottom: 10,
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
    // position: "absolute",
    // bottom: 0,
    marginTop: 5,
    fontSize: 11,
    opacity: 0.8,
    color: GlobalColors.black_opacity,
    alignSelf: "flex-end",
  },
});
