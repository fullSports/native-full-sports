import { StyleSheet } from "react-native";
import { GlobalColors } from "../../../../shared/utils/styles/global-colors";

export const EditProfileStyles = StyleSheet.create({
  user_porfile_icon: {
    fontSize: 22,
    color: GlobalColors.light_grey,
    marginRight: 5,
  },
  user_pfp: {
    borderRadius: 100,
    height: 100,
    width: 100,
  },
  header_user_profile: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginVertical: 20,
  },
  header_title: {
    fontSize: 14,
    fontWeight: "700",
    color: GlobalColors.darkBlue,
  },
  user_info_row: {
    flexDirection: "row",
    marginVertical: 5,
  },
  header_user_name: {
    color: GlobalColors.darkBlue,
    fontSize: 13,
    fontWeight: "300",
    marginLeft: 30,
  },
});
