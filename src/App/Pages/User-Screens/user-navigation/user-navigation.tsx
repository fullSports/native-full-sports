import { Image, Text, TouchableOpacity, View } from "react-native";
import { AccessibilityBar } from "../../../../shared/components/Header/Header";
import { UserNavStyles as style } from "./user-navigation-styles";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

const pfp = require("./../../../assets/illustrations/testE_pfp.png");

export const UserNavigation = ({ navigation }) => {
  return (
    <>
      <AccessibilityBar />
      <View style={style.user_header}>
        <Image source={pfp} style={style.user_pfp} />
        <Text style={style.user_txt}>Mariana dos Santos Oliveira</Text>
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
