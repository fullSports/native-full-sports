import { Component } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { styleCardV } from "./style";

const imgTeste = require("../../../../App/assets/illustrations/teste_product_card.png");

export default class VerticalCard extends Component {
  render() {
    return (
      <View style={styleCardV.cardVertical}>
        <Image style={styleCardV.cardPicCover} source={imgTeste} />
        <View style={styleCardV.cardDescBottom}>
          <Text style={styleCardV.cardTitle}>Tênis esportivo</Text>
          <Text style={styleCardV.cardPreviousPrice}>de R$ 40,00</Text>
          <View style={styleCardV.cardPaymentDetails}>
            <Text style={styleCardV.cardPrice}>por R$ 29,99</Text>
            <Text style={styleCardV.cardPaymentTip}>em até 6x sem juros</Text>
          </View>
        </View>
      </View>
    );
  }
}
