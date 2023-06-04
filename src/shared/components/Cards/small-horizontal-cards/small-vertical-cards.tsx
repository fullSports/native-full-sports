import { Image, Text, View } from "react-native";
import { styleSmallCardV as style } from "./small-vertical-cards-styles";
import { IProductCard } from "../../../utils/models/interface-card-item";

const noProductImg = require("../../../../App/assets/illustrations/no-product-image.png");

export const SmallVerticalCard = (comp: IProductCard) => {
  const cardimg = comp.src;

  return (
    <View style={style.cardVertical}>
      <Image
        style={style.cardPicCover}
        source={
          onerror ? noProductImg : !cardimg ? noProductImg : { uri: cardimg }
        }
      />
      <View style={style.cardDescBottom}>
        <Text style={style.cardTitle}>{comp.produtoName}</Text>
        {comp.PrecoAnterior ? (
          <Text style={style.cardPreviousPrice}>
            de R$ {comp.PrecoAnterior}
          </Text>
        ) : (
          <></>
        )}
        <View style={style.cardPaymentDetails}>
          <Text style={style.cardPrice}>por R$ {comp.PrecoAtual}</Text>
        </View>
        <View style={[style.cardPaymentDetails, { marginVertical: 5 }]}>
          <Text style={style.cardPaymentTip}>
            em até 12X de R${comp.precoParcelado}
          </Text>
        </View>
      </View>
    </View>
  );
};
