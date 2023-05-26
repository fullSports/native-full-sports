import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";
import { CartCardsStyles as style } from "./cart-cards-styles";
import { ICartCard } from "../../../utils/models/interface-card-item";
const imgExemple = require("./../../../../App/assets/illustrations/teste_product_card.png");

export const CartCards = (items: ICartCard) => {
  return (
    <View style={style.card_container}>
      <View style={style.card_align}>
        <Image source={imgExemple} style={style.card_product_img} />
        <View style={style.card_txt_info}>
          <Text>{items.productName}</Text>
          <Text style={global.card_info_txt}>
            {items.qtdProduct}, {items.sizeProduct}
          </Text>
          <Text>{items.productPrice}</Text>
        </View>
        <Icon
          style={style.card_delete_opt}
          name="trash-can"
          color={"#BE5757"}
          //   size={18}
        />
      </View>
    </View>
  );
};
