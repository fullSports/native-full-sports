import { Image, Text, TouchableHighlight, View } from "react-native";
import { WelcomeStyles as style } from "./welcome-screen-styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  ButtonGreen,
  ButtonWhite,
} from "../../../../shared/components/Buttons/Default-Buttons";
import { useEffect } from "react"
import { GlobalColors } from "../../../../shared/utils/styles/global-colors";
const welcomePic = require("./../../../assets/illustrations/welcome_page_img.png");
const fullSportsLogo = require("./../../../assets/illustrations/full-sports-logo.png");

export const WelcomeScreen = ({ navigation }) => {
  return (
    <>
      <View style={style.welcome_screen_display}>
        {/* <Image source={fullSportsLogo} style={style.top_logo_img} /> */}
        <View style={style.welcome_illustrarion}>
          <Image source={welcomePic} style={style.welcome_pic} />
        </View>
        <View style={style.welcome_options_container}>
          <Text style={style.welcome_title}>Bem-vindo!</Text>
          <View style={style.welcome_desc_container}>
            <Text style={style.welcome_desc}>
              A Full Sports é uma plataforma de vendas destinada a produtos
              esportivos. Venha explorar nossos produtos!
            </Text>
          </View>
          <View style={style.welcome_btns_group}>
            <TouchableHighlight underlayColor={GlobalColors.white}  onPress={() => navigation.navigate("Login")}>
              <ButtonGreen
                width={370}
                action={() => navigation.navigate("Login")}
                name="Realizar Login"
              />
            </TouchableHighlight >
            <TouchableHighlight underlayColor={GlobalColors.white}   onPress={() => navigation.navigate("CadastroUsuario")}>
              <ButtonWhite
                width={370}
                action={() => navigation.navigate("CadastroUsuario")}
                name="Criar conta"
              />
            </TouchableHighlight>
          </View>
          <TouchableHighlight underlayColor={GlobalColors.white}  onPress={() => navigation.navigate("Home")}>
            <Text style={style.welcome_ignore}>Dispensar</Text>
          </TouchableHighlight>
        </View>
      </View>
    </>
  );
};
