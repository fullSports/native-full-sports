import { StyleSheet } from "react-native";
import { GlobalColors } from "../../../../shared/utils/styles/global-colors";

export const UserNavStyles = StyleSheet.create({
  user_header: {
    backgroundColor: GlobalColors.white,
    height: 80,
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    paddingHorizontal: 15,
    marginVertical: 15,
  },
  user_pfp: {
    borderRadius: 100,
    height: 45,
    width: 45,
  },
  user_txt: {
    color: GlobalColors.input_placeholder,
    fontSize: 15,
    fontWeight: "600",
  },
  user_nav_opts: {
    backgroundColor: GlobalColors.white,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  user_nav_opts_icon: {
    fontSize: 24,
    color: GlobalColors.neon_green,
  },
  user_nav_opts_item: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  user_nav_opts_arrow: {
    fontSize: 18,
  },
});
