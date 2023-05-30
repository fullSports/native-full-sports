import { Image, Text, View } from "react-native";
import { WelcomeStyles as style } from "./welcome-screen-styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  ButtonGreen,
  ButtonWhite,
} from "../../../../shared/components/Buttons/default-buttons";
const welcomePic = require("./../../../assets/illustrations/login-picture.svg");
const fullSportsLogo = require("./../../../assets/illustrations/full-sports-logo.png");

export const WelcomeScreen = ({ navigation }) => {
  function teste() {
    console.log("hello");
  }
  return (
    <>
      <View style={style.welcome_screen_display}>
        {/* <Image source={fullSportsLogo} style={style.top_logo_img} /> */}
        <View style={style.welcome_illustrarion}>
          <Image source={welcomePic} style={style.welcome_pic} />
        </View>
        <View style={style.welcome_options_container}>
          <Text style={style.welcome_title}>Bem-vindo!</Text>
          <Text style={style.welcome_desc}>
            A Full Sports é uma plataforma de vendas destinada a produtos
            esportivos. Venha explorar nossos produtos!
          </Text>
          <View style={style.welcome_btns_group}>
            <ButtonGreen
              width={370}
              action={() => navigation.navigate("Login")}
              name="Realizar Login"
            />
            <ButtonWhite
              width={370}
              action={() => navigation.navigate("CadastroUsuario")}
              name="Criar conta"
            />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text style={style.welcome_ignore}>Dispensar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
