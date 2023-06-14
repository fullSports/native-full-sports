import { Image, Text, View, TouchableOpacity } from "react-native";
import { Styles } from "./styles-header";
import { Button, IconButton } from "react-native-paper";
import { GlobalColors } from "../../utils/styles/global-colors";
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from "react";
import SyncStorage from "@react-native-async-storage/async-storage";
const fullSportsLogo = require("../../../App/assets/illustrations/full-sports-logo.png");

export const Header = ({ navigation }) => {
  const [carrinho, setCarrinho] = useState(null);
  useEffect(() => {
    const T = setInterval(async () => {
      const carrinho1 = SyncStorage.getItem("carrinho")
      await carrinho1.then((Res) => {
        if (Res == null) {
          setCarrinho(null);
        } else {
          setCarrinho(JSON.parse(Res));
        }
      });
    },100)
    return () => clearInterval(T);
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <View style={Styles.header_logo_actions}>
        <Image source={fullSportsLogo} style={Styles.logo_style} />
        <View style={Styles.header_actions}>
          <TouchableOpacity onPress={() => navigation.navigate("Carrinho")}>
            <MaterialCommunityIcons
              name="cart"
              size={25}
            // onPress={() => navigation.navigate("Carrinho")}
            >
              {carrinho ? (<View style={{
                backgroundColor: GlobalColors.neon_green,
                borderRadius: 50,
                height: 20,
                width: 20,
                alignItems: "center",
              }}>
                <Text>{carrinho.pedido.quantidadePedido}</Text>
              </View>) : (<></>)}
            </MaterialCommunityIcons>
          </TouchableOpacity>
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
        style={{ paddingTop: "40%" }}
      />
      <IconButton
        icon="contrast-circle"
        iconColor={GlobalColors.white}
        size={15}
        style={{ paddingTop: "40%" }}
      />
    </View>
  );
};
