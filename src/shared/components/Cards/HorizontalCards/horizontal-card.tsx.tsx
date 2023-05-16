import { Image, Text, View, Button } from "react-native";
import { styleCardH } from "./styles-horizontal-card";
import { ITeste } from "../../../utils/models/interface-card-item";
import { TouchableOpacity } from "react-native-gesture-handler";

const noProductImg = require("../../../../App/assets/illustrations/no-product-image.png");

export const HorizontalCard = (comp: ITeste) => {
  const cardimg = comp.imgProduto;

  return (
    <TouchableOpacity
      style={styleCardH.cardHorizontal}
      onPress={() => console.log("hey")}
    >
      <Image
        style={styleCardH.cardPicCover}
        source={
          onerror ? noProductImg : !cardimg ? noProductImg : { uri: cardimg }
        }
      />
      <View style={styleCardH.cardHDesc}>
        <Text style={styleCardH.cardHTile}>{comp.name}</Text>
        <Text style={styleCardH.cardHPreco}>R$ {comp.precoAtual}</Text>
        <Text style={styleCardH.cardHParcela}>R$ {comp.parcelamento}</Text>
      </View>
    </TouchableOpacity>
  );
};
