import { Image, Text, View } from "react-native";
import { Styles } from "./styles-header";
import { Button, IconButton } from "react-native-paper";
import { GlobalColors } from "../../utils/styles/global-colors";
const fullSportsLogo = require("../../../App/assets/illustrations/full-sports-logo.png");

export const Header = (header, navigator) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={Styles.acessibility_bar}>
        <IconButton
          icon="help-circle-outline"
          iconColor={GlobalColors.white}
          size={15}
        />
        <IconButton
          icon="contrast-circle"
          iconColor={GlobalColors.white}
          size={15}
        />
      </View>
      <View style={Styles.header_logo_actions}>
        <Image source={fullSportsLogo} style={Styles.logo_style} />
        <View style={Styles.header_actions}>
          <IconButton icon="cart" />
          <IconButton
            icon="account-circle"
            onPress={() => navigator.push("home")}
          />
        </View>
      </View>
      {header.children}
    </View>
  );
};
