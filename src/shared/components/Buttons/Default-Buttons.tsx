import { TouchableOpacity } from "react-native-gesture-handler";
import { DefaultButtonsStyles as style } from "./default-buttons-style";
import { Text, View } from "react-native";

export const ButtonGreen = ({ name, action, width }) => {
  return (
    <TouchableOpacity
      onPress={() => action()}
      style={[style.welcome_btn_green, { width: width }]}
    >
      <Text style={style.welcome_btn_green_txt}>{name}</Text>
    </TouchableOpacity>
  );
};

export const ButtonWhite = ({ name, action, width }) => {
  return (
    <TouchableOpacity
      onPress={() => action()}
      style={[style.welcome_btn_white, { width: width }]}
    >
      <Text style={style.welcome_btn_white_txt}>{name}</Text>
    </TouchableOpacity>
  );
};
