import { Image, Text, View } from "react-native";
import { styleCardV } from "./styles-vertical-card";
import { IProductCard } from "../../../utils/models/interface-card-item";

export const VerticalCard = (comp: IProductCard) => {
  const cardimg = comp.src;
  // const cardimg = comp.src;
  const noProductImg = require("../../../../App/assets/illustrations/no-product-image.png");
  // const noProductImg = require(comp.src);

  return (
    <View style={styleCardV.cardVertical}>
      <Image
        style={styleCardV.cardPicCover}
        source={{ uri: comp.src }}
      />
      <View style={styleCardV.cardDescBottom}>
        <Text style={styleCardV.cardTitle}>{comp.produtoName}</Text>
        {comp.PrecoAnterior ? (
          <Text style={styleCardV.cardPreviousPrice}>
            de R$ {comp.PrecoAnterior}
          </Text>
        ) : (
          <></>
        )}
        <View style={styleCardV.cardPaymentDetails}>
          <Text style={styleCardV.cardPrice}>por R$ {comp.PrecoAtual}</Text>
        </View>
        <View style={[styleCardV.cardPaymentDetails, { marginVertical: 5 }]}>
          <Text style={styleCardV.cardPaymentTip}>
            em até 12X de R${comp.precoParcelado}
          </Text>
        </View>
      </View>
    </View>
  );
};
