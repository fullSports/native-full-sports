import SyncStorage from "@react-native-async-storage/async-storage";
import { Image, Text, View } from "react-native";
import { CartCards } from "../../../shared/components/Cards/cart-cards/cart-cards";
import { AccessibilityBar } from "../../../shared/components/Header/Header";
import { GlobalStyles as global } from "../../../../styles-global";
import { CarrinhoStyles as style } from "./carrinho-styles";

import { ScrollView } from "react-native-gesture-handler";
import {
  ButtonGreen,
  ButtonWhite,
} from "../../../shared/components/Buttons/default-Buttons";
import { useEffect, useState } from "react";
import IProduto from "../../../shared/utils/interfaces/IProduto";
import fullsports_api from "../../../environment/full-sports-api";

const empty_cart = require("./../../assets/illustrations/empty_cart_img.png");

export const Carrinho = ({ route, navigation }) => {
  const [itensCarrinho, setItensCarrinho] = useState();
  const [quantidade, setQuantidade] = useState<number>();
  const [produtoPedido, setProdutoPedido] = useState<IProduto>();
  const [categoriaProduto, setCategoriaProduto] = useState<string>("");

  useEffect(() => {
    async function getCarrinho() {
      try {
        const carrinho = JSON.parse(
          (await SyncStorage.getItem("carrinho")) as string
        );
        setItensCarrinho(carrinho);
        setQuantidade(carrinho.pedido.quantidade);

        fullsports_api
          .get(`listar-produto/${carrinho.pedido.produto}`)
          .then((res) => {
            setProdutoPedido(res.data);
            setCategoriaProduto(Object.keys(res.data.categoriaProduto)[0]);
          });
      } catch (e) {
        console.log("error is:", e);
      }
    }
    getCarrinho();
  }, []);

  console.log(produtoPedido);
  console.log(itensCarrinho);
  if (itensCarrinho) {
    return (
      <>
        {produtoPedido ? (
          <>
            <AccessibilityBar />
            <View style={[global.screenContainer, style.screen_view]}>
              <ScrollView style={{ marginBottom: 100 }}>
                <Text style={[global.section_title, { marginVertical: 15 }]}>
                  Carrinho
                </Text>

                <CartCards
                  action={() => console.log("haha")}
                  src={
                    produtoPedido.categoriaProduto[categoriaProduto]
                      .imagemProduto[0].url
                  }
                  produtoNome={produtoPedido.categoriaProduto[
                    categoriaProduto
                  ].nome.slice(0, 20)}
                  produtoPreco={
                    parseFloat(
                      produtoPedido.categoriaProduto[categoriaProduto].preco
                    ) * quantidade
                  }
                  qtdProduto={quantidade}
                  tamanhoProduto={
                    produtoPedido.categoriaProduto[categoriaProduto].tamanho
                  }
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
                  action={() => {
                    SyncStorage.removeItem("carrinho");
                    navigation.navigate("Home");
                  }}
                />
              </View>
            </View>
          </>
        ) : (
          <></>
        )}
      </>
    );
  } else if (!itensCarrinho) {
    return (
      <View style={style.empty_cart_container}>
        <Image source={empty_cart} />
      </View>
    );
  }
};
