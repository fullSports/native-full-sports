import { Image, Text, View } from "react-native";
import { styleCardV } from "./styles-vertical-card";
import { IProductCard } from "../../../utils/models/interface-card-item";

const noProductImg = require("../../../../App/assets/illustrations/no-product-image.png");

export const VerticalCard = (comp: IProductCard) => {
  const cardimg = comp.imgProduto;

  return (
    <View style={styleCardV.cardVertical}>
      <Image
        style={styleCardV.cardPicCover}
        source={
          onerror ? noProductImg : !cardimg ? noProductImg : { uri: cardimg }
        }
      />
      <View style={styleCardV.cardDescBottom}>
        <Text style={styleCardV.cardTitle}>{comp.name}</Text>
        {comp.precoAnterior ? (
          <Text style={styleCardV.cardPreviousPrice}>
            de R$ {comp.precoAnterior}
          </Text>
        ) : (
          <></>
        )}
        <View style={styleCardV.cardPaymentDetails}>
          <Text style={styleCardV.cardPrice}>por R$ {comp.precoAtual}</Text>
          <Text style={styleCardV.cardPaymentTip}>
            em até {comp.parcelamento}
          </Text>
        </View>
      </View>
    </View>
  );
};
