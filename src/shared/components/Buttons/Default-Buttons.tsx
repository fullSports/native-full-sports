import { TouchableOpacity } from "react-native-gesture-handler";
import { DefaultButtonsStyles as style } from "./default-buttons-style";

export const ButtonGreen = ({ name, action }) => {
  return (
    <TouchableOpacity onPress={() => action()} style={style.welcome_btn_green}>
      {name}
    </TouchableOpacity>
  );
};

export const ButtonWhite = ({ name, action }) => {
  return (
    <TouchableOpacity onPress={() => action()} style={style.welcome_btn_white}>
      {name}
    </TouchableOpacity>
  );
};
