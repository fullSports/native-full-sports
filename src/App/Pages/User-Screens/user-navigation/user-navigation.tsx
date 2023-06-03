import React, { useState, useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { AccessibilityBar } from "../../../../shared/components/Header/Header";
import { UserNavStyles as style } from "./user-navigation-styles";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import SyncStorage from "@react-native-async-storage/async-storage";
import { GlobalColors } from "../../../../shared/utils/styles/global-colors";
import ICliente from "../../../../shared/utils/interfaces/ICliente";
const pfp = require("./../../../assets/illustrations/testE_pfp.png");

export const UserNavigation = ({ navigation }) => {
  const [user, setUser] = useState<ICliente>();
  useEffect(() => {
    SyncStorage.getItem("user").then(res => {
      if (res !== null) {
        setUser(JSON.parse(res))
      }
    })
  }, [])
  return (
    <>
      <AccessibilityBar />
      <View style={style.user_header}>
        <Image source={{ uri: user ? user.imagemPerfil.url : "" }} style={style.user_pfp} />
        <Text style={style.user_txt}>{user ? user.nome : null}</Text>
        <Button
          onPress={() => {
            SyncStorage.removeItem("user")
            navigation.navigate("Home")
          }}
          style={{
            backgroundColor: "green"
          }}
          icon="login"
          textColor={GlobalColors.white}
          disabled={false}
        >
          Logout
        </Button>
      </View>

      <View style={{ marginVertical: 10 }}>
        <TouchableOpacity
          style={style.user_nav_opts}
          onPress={() => navigation.navigate("UserPedidos")}
        >
          <View style={style.user_nav_opts_item}>
            <Icon style={style.user_nav_opts_icon} name="table" />
            <Text>Pedidos</Text>
          </View>
          <Icon style={style.user_nav_opts_arrow} name="chevron-right" />
        </TouchableOpacity>
        <TouchableOpacity
          style={style.user_nav_opts}
          onPress={() => navigation.navigate("Carrinho")}
        >
          <View style={style.user_nav_opts_item}>
            <Icon style={style.user_nav_opts_icon} name="cart-outline" />
            <Text>Carrinho de compras</Text>
          </View>
          <Icon style={style.user_nav_opts_arrow} name="chevron-right" />
        </TouchableOpacity>
        <TouchableOpacity
          style={style.user_nav_opts}
          onPress={() => navigation.navigate("EditUserProfile")}
        >
          <View style={style.user_nav_opts_item}>
            <Icon style={style.user_nav_opts_icon} name="pencil-box-outline" />
            <Text>Editar meus dados</Text>
          </View>
          <Icon style={style.user_nav_opts_arrow} name="chevron-right" />
        </TouchableOpacity>
      </View>
    </>
  );
};
