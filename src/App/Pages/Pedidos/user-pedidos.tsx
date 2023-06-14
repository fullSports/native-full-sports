import { Image, ScrollView, Text, View } from "react-native";
import { PedidosCliente } from "../../../shared/components/Cards/order-cards/OrderCards";
import { GlobalStyles as global } from "../../../../styles-global";
import { StylePedidos as style } from "./user-pedidos-style";
import fullsports_api from "../../../environment/full-sports-api";
import { useEffect, useState } from "react";
import { CustomSpinner } from "../../../shared/components/Spinner/custom-spinner";
import SyncStorage from "@react-native-async-storage/async-storage";
import IPedido from "../../../shared/utils/interfaces/IPedido";
import ICliente from "../../../shared/utils/interfaces/ICliente";
import { AccessibilityBar } from "../../../shared/components/Header/Header";
export default function UserPedidos({ navigation }) {
  const [listaPedidos, setListaPedidos] = useState<IPedido[]>([]);
  const [spinner, setSpinner] = useState(true);
  const [user, setUser] = useState<ICliente>(null);
  const buscarPedido = async () => {
    const user1 = await SyncStorage.getItem("user");
    if (user1 != null) {
      const token = await SyncStorage.getItem("access_token");
      fullsports_api.get<IPedido[]>('listar-pedidos', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((Res) => {
        setListaPedidos(Res.data);
        setUser(JSON.parse(user1));
        setSpinner(false);
      });
    }
  }
  useEffect(() => {
    buscarPedido();
  }, []);
  // setTimeout(() => {
  //   const pedidoAtualizado = SyncStorage.getItem("pedidoAtualizado")
  //   pedidoAtualizado.then(async (Res) => {
  //     console.log(Res);
  //     if (Res != null) {
  //       setListaPedidos([]);
  //       setSpinner(true);
  //       buscarPedido();
  //       await SyncStorage.removeItem("pedidoAtualizado");
  //     } else {

  //     }
  //   })
  // },10)
  setInterval(async function () {
    const pedidoAtualizado = SyncStorage.getItem("pedidoAtualizado")
    pedidoAtualizado.then(async (Res) => {
      if (Res != null) {
        setListaPedidos([]);
        setSpinner(true);
        buscarPedido();
        await SyncStorage.removeItem("pedidoAtualizado");
      };
    })
  }, 100);
  return (
    <>
      <AccessibilityBar />
      <ScrollView style={style.pedidos_screen_container}>
        <Text style={global.section_title}>Meus Pedidos</Text>
        {!spinner && user ? (<View style={style.pedidos_cards_container}>
          {listaPedidos?.map((item) => {
            if (item.cliente._id === user._id) {
              return <PedidosCliente pedido={item} key={item._id}></PedidosCliente>
            }
          })}
        </View >) : <>
          <CustomSpinner />
        </>}
      </ScrollView>
    </>
  );
}
