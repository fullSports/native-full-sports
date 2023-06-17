import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { CartCardsStyles as style } from "./cart-cards-styles";
import { ICartCard } from "../../../utils/models/interface-card-item";
import { GlobalStyles as global } from "../../../../../styles-global";
import { GlobalColors } from "../../../utils/styles/global-colors";
const noImg = require("./../../../../App/assets/illustrations/no-product-image.png");

export const CartCards = (comp: ICartCard) => {
  const imgProduto = comp.src;

  return (
    <View style={style.card_container}>
      <View style={style.card_align}>
        <View style={style.card_info_align}>
          <Image style={style.card_product_img} source={{ uri: imgProduto }} />
          <View style={style.card_txt_info}>
            <Text style={style.card_info_title}>{comp.produtoNome}</Text>
            <Text style={style.card_info_txt}>
              {comp.qtdProduto}x, tam. {comp.tamanhoProduto}
            </Text>
            <Text style={style.card_price_total}>R$ {comp.produtoPreco}</Text>
          </View>
        </View>

        {/* <TouchableOpacity onPress={() => comp.action()}>
          <Icon
            style={style.card_delete_opt}
            name="trash-can"
            color={GlobalColors.light_grey}
          />
        </TouchableOpacity> */}
      </View>
    </View>
  );
};
