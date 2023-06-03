import { Text, View } from "react-native";
import { CartCards } from "../../../shared/components/Cards/cart-cards/cart-cards";
import { AccessibilityBar } from "../../../shared/components/Header/Header";
import { GlobalStyles as global } from "../../../../styles-global";
import { CarrinhoStyles as style } from "./carrinho-styles";
import {
  ButtonGreen,
  ButtonWhite,
} from "../../../shared/components/Buttons/Default-Buttons";
import { ScrollView } from "react-native-gesture-handler";

export const Carrinho = (navigation) => {
  return (
    <>
      <AccessibilityBar />
      <View style={[global.screenContainer, style.screen_view]}>
        <ScrollView style={{ marginBottom: 100 }}>
          <Text style={[global.section_title, { marginVertical: 15 }]}>
            Carrinho
          </Text>

          <CartCards
            productName="Camiseta Esportiva Masculina"
            productPrice={40.9}
            qtdProduct={3}
            sizeProduct="GG"
          />
          <CartCards
            productName="Camiseta Esportiva Masculina"
            productPrice={40.9}
            qtdProduct={3}
            sizeProduct="GG"
          />
          <CartCards
            productName="Camiseta Esportiva Masculina"
            productPrice={40.9}
            qtdProduct={3}
            sizeProduct="GG"
          />
          <CartCards
            productName="Camiseta Esportiva Masculina"
            productPrice={40.9}
            qtdProduct={3}
            sizeProduct="GG"
          />
          <CartCards
            productName="Camiseta Esportiva Masculina"
            productPrice={40.9}
            qtdProduct={3}
            sizeProduct="GG"
          />
          <CartCards
            productName="Camiseta Esportiva Masculina"
            productPrice={40.9}
            qtdProduct={3}
            sizeProduct="GG"
          />
          <CartCards
            productName="Camiseta Esportiva Masculina"
            productPrice={40.9}
            qtdProduct={3}
            sizeProduct="GG"
          />
        </ScrollView>

        <View style={style.btns_actions_container}>
          <ButtonGreen
            width={350}
            name="Finalizar pedido"
            action={() => console.log("finalizar pedido")}
          />
          <ButtonWhite
            width={350}
            name="remover todos os itens"
            action={() => console.log("escluir itens")}
          />
        </View>
      </View>
    </>
  );
};
