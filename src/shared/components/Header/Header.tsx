import { Image, Text, View, TouchableOpacity } from "react-native";
import { Styles } from "./styles-header";
import { Button, IconButton } from "react-native-paper";
import { GlobalColors } from "../../utils/styles/global-colors";
import React from "react";
const fullSportsLogo = require("../../../App/assets/illustrations/full-sports-logo.png");

export const Header = ({ route, navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={Styles.header_logo_actions}>
        <Image source={fullSportsLogo} style={Styles.logo_style} />
        <View style={Styles.header_actions}>
          {/* <IconButton
            icon="cart"
            onPress={() => navigation.navigate("Carrinho")}
          /> */}
        </View>
      </View>
      {/* {header.children} */}
    </View>
  );
};

export const AccessibilityBar = () => {
  return (
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
  );
};
