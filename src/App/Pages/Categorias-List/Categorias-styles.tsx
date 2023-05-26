import { StyleSheet } from "react-native";
import { GlobalColors } from "../../../shared/utils/styles/global-colors";

export const CategoriaStyles = StyleSheet.create({
  categoriasContainer: {
    width: "100%",
    flex: 1,
    margin: 10,
    // justifyContent: "center",
    alignItems: "center",
  },
  CategoryCardCover: {
    backgroundColor: GlobalColors.black_opacity,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  CategoryCard: {
    width: 180,
    height: 90,
    borderRadius: 10,
    overflow: "hidden",
    margin: 4,
  },
  CategoryCardText: {
    color: GlobalColors.white,
    textTransform: "uppercase",
    fontWeight: "300",
    fontSize: 18,
    textAlign: "center",
  },
  imgBg: {
    flex: 1,
    justifyContent: "center",
  },
  categoriasRow: {
    width: "100%",
    flexDirection: "row",
  },
});
