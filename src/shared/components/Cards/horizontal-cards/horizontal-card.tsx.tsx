import { Image, Text, View } from "react-native";
import { styleCardH } from "./styles-horizontal-card";
import { IProductCard } from "../../../utils/models/interface-card-item";
import { TouchableOpacity } from "react-native-gesture-handler";

const noProductImg = require("../../../../App/assets/illustrations/no-product-image.png");

export const HorizontalCard = (comp: IProductCard) => {
  const cardimg = comp.src;

  return (
    <TouchableOpacity style={styleCardH.cardHorizontal}>
      <Image
        style={styleCardH.cardPicCover}
        source={
          onerror ? noProductImg : !cardimg ? noProductImg : { uri: cardimg }
        }
      />
      <View style={styleCardH.cardHDesc}>
        <Text style={styleCardH.cardHTile}>{comp.produtoName}</Text>
        <Text style={styleCardH.cardHPreco}>R$ {comp.PrecoAtual}</Text>
        <Text style={styleCardH.cardHParcela}>R$ {comp.precoParcelado}</Text>
      </View>
    </TouchableOpacity>
  );
};
