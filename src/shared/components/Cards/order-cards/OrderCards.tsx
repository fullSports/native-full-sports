import SyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";
import { OrderCardStyles as style } from "./styles-order-cards";
import { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GlobalStyles as global } from "../../../../../styles-global";
import { ButtonWhite } from "../../Buttons/Default-Buttons";
import { IPedidos } from "../../../utils/models/interface-pedidos";
import fullsports_api from "../../../../environment/full-sports-api";
const imgIlustrativa = require("../../../../App/assets/illustrations/teste_product_card.png");

// comp: IPedidos
export const PedidosCliente = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [listaPedidos, setListaPedidos] = useState<IPedidos[]>([]);
  const [spinner, setSpinner] = useState(false);
  const [user, setUser] = useState<any>();

  // function getPedido() {
  //   setSpinner(true);

  //   try {
  //     fullsports_api.get<IPedidos[]>("listar-pedidos").then((res) => {
  //       setListaPedidos(res.data);
  //       console.log(res.data);
  //       setSpinner(false);
  //     });
  //   } catch (e) {
  //     console.log("error is", e);
  //   }
  // }

  // async function listarPedido() {
  //   const user = await SyncStorage.getItem("user");

  //   listaPedidos.map((item) => {
  //     return <>if(item._id == user._id)</>;
  //   });
  // }

  // useEffect(() => {
  //   async function testing() {
  //     const usern = await SyncStorage.getItem("user");
  //     setUser(usern);
  //   }
  //   testing();
  //   getPedido();
  // }, []);

  return (
    <View
      style={[
        style.card_container,
        expanded
          ? { height: "fit-content", paddingVertical: 20 }
          : { height: 130 },
      ]}
    >
      <TouchableOpacity
        style={{ flexDirection: "row" }}
        onPress={() => setExpanded(!expanded)}
      >
        <Image source={imgIlustrativa} style={style.card_product_photo} />
        <View style={style.carD_details_txt}>
          <Text style={global.card_product_name}>
            Camiseta esportiva masculina
          </Text>
          <Text style={global.card_info_txt}>Masculino, GG, 1x</Text>
          <Text style={global.card_info_txt}>20 de setembro de 2023</Text>
          <Text style={global.card_product_price}>R$ 99,99</Text>
        </View>
        <View style={style.card_arrow}>
          <Icon name={expanded ? "chevron-up" : "chevron-down"} size={20} />
        </View>
      </TouchableOpacity>

      <View style={expanded ? style.card_expanded_detailhes : style.visible}>
        <View style={style.card_expanded_txt_container}>
          <View style={style.card_expanded_detailhes_col}>
            <View>
              <Text style={global.card_info_txt}>
                Lisandra Ferraz de Santana
              </Text>
              <Text style={global.card_info_txt}>456.***.***-02</Text>
              <Text style={global.card_info_txt}>Crédito, final 398</Text>
            </View>
          </View>
          <View style={style.card_expanded_detailhes_col}>
            <View>
              <Text style={global.card_info_txt}>
                Rua Rodrigo de Oliveira, 97
              </Text>
              <Text style={global.card_info_txt}>São Paulo, SP</Text>
              <Text style={global.card_info_txt}>08577-098</Text>
            </View>
          </View>
        </View>
        <View style={style.card_expanded_status_btn_container}>
          <View style={style.card_expanded_status}>
            <Icon name="clock-outline" size={20} />
            <Text style={style.card_expanded_status_txt}>
              Aguardando Pagamento
            </Text>
          </View>
          <ButtonWhite
            width={330}
            name="Cancelar pedido"
            action={() => console.log("cancelar")}
          />
        </View>
      </View>
    </View>
  );
};
