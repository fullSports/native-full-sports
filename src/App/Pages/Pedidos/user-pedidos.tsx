import { Image, ScrollView, Text, View } from "react-native";
import { IPedidos } from "../../../shared/utils/models/interface-pedidos";
import { PedidosCliente } from "../../../shared/components/Cards/OrderCards/OrderCards";
import { StylePedidos as style } from "./user-pedidos-style";

export default function UserPedidos() {
  return (
    <ScrollView style={style.pedidos_screen_container}>
      <Text style={style.section_title}>Meus Pedidos</Text>
      <View style={style.pedidos_cards_container}>
        <PedidosCliente />
        <PedidosCliente />
        <PedidosCliente />
        <PedidosCliente />
      </View>
    </ScrollView>
  );
}
