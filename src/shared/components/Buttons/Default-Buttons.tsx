import { DefaultButtonsStyles as style } from "./default-buttons-style";

export const ButtonGreen = ({ name, action }) => {
  return (
    <button onClick={() => action()} style={style.welcome_btn_green}>
      {name}
    </button>
  );
};

export const ButtonWhite = ({ name, action }) => {
  return (
    <button onClick={() => action()} style={style.welcome_btn_white}>
      {name}
    </button>
  );
};
