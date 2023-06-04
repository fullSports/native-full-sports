import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";
import { OrderCardStyles as style } from "./styles-order-cards";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GlobalStyles as global } from "../../../../../styles-global";
import { ButtonWhite } from "../../Buttons/default-Buttons";
const imgIlustrativa = require("../../../../App/assets/illustrations/teste_product_card.png");

// comp: IPedidos
export const PedidosCliente = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

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
