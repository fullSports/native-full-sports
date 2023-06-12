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
} from "../../../shared/components/Buttons/Default-Buttons";
import { useEffect, useState } from "react";
import IProduto from "../../../shared/utils/interfaces/IProduto";
import fullsports_api from "../../../environment/full-sports-api";
import { useIsFocused } from "@react-navigation/native";
import { CustomSpinner } from "../../../shared/components/Spinner/custom-spinner";

const empty_cart = require("./../../assets/illustrations/empty_cart_img.png");

export const Carrinho = ({ route, navigation }) => {
  const isFocused = useIsFocused();

  const [itensCarrinho, setItensCarrinho] = useState<any>([]);
  const [quantidade, setQuantidade] = useState<number>();
  const [produtoPedido, setProdutoPedido] = useState<IProduto>();
  const [categoriaProduto, setCategoriaProduto] = useState<string>("");
  const [spinner, setSpinner] = useState(false);
  const [emptyCart, setEmptyCart] = useState<boolean>();

  async function getCarrinho() {
    setSpinner(true);
    try {
      const carrinho = JSON.parse(await SyncStorage.getItem("carrinho"));
      const token = await SyncStorage.getItem("access_token");

      setItensCarrinho(carrinho.pedido);
      // setItensCarrinho((oldCart) => [...oldCart, carrinho.pedido]);
      console.log(itensCarrinho);
      setQuantidade(carrinho.pedido.quantidadePedido);

      fullsports_api
        .get(`listar-produto/${carrinho.pedido.produto}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setProdutoPedido(res.data);
          setCategoriaProduto(Object.keys(res.data.categoriaProduto)[0]);
        });

      setEmptyCart(false);
    } catch (e) {
      setEmptyCart(true);
      console.log("error is:", e);
    }
  }

  useEffect(() => {
    if (isFocused) {
      getCarrinho();
    }
  }, [isFocused]);

  async function realizarPedido() {
    setSpinner(true);
    const token = await SyncStorage.getItem("access_token");
    fullsports_api
      .request({
        method: "POST",
        url: "realizar-pedido",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          quantidadePedido: itensCarrinho.quantidadePedido,
          produto: itensCarrinho.produto,
          cliente: itensCarrinho.clienteID,
        },
      })
      .then(() => {
        console.log("sucesso");
        SyncStorage.removeItem("carrinho");
        setItensCarrinho(null);
        navigation.navigate("Home");
      })
      .catch((e) => console.log("error is:", e));
  }

  if (emptyCart == false) {
    return (
      <>
        {produtoPedido && spinner ? (
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
                  action={() => realizarPedido()}
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
          <CustomSpinner />
        )}
      </>
    );
  }
  if (emptyCart == true) {
    return (
      <View style={style.empty_cart_container}>
        <Image source={empty_cart} style={style.empty_cart_img} />
        <ButtonGreen
          width={300}
          name="Ir às compras!"
          action={() => navigation.navigate("Home")}
        />
      </View>
    );
  }
};
