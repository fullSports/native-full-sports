import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import SyncStorage from "@react-native-async-storage/async-storage";

import { DetalheStyles as style } from "./Produto-detalhes-styles";
import { useEffect, useState } from "react";
import { GlobalColors } from "../../../shared/utils/styles/global-colors";

import fullsports_api from "../../../environment/full-sports-api";
import IProduto from "../../../shared/utils/interfaces/IProduto";
import {
  ButtonGreen,
  ButtonWhite,
} from "../../../shared/components/Buttons/Default-Buttons";
import ICliente from "../../../shared/utils/interfaces/ICliente";

const imgIlustrativa = require("../../assets/illustrations/teste_product_card.png");

export const ProdutoDetalhes = ({ route, navigation }) => {
  const [numItems, setNumItems] = useState<number>(1);
  const [produtoDetails, setProdutoDetails] = useState<IProduto>();
  const [categoriaProduto, setCategoriaProduto] = useState<string>("");
  const [userID, setUserID] = useState<ICliente>();
  const [spinner, setSpinner] = useState(true);
  const [token, setToken] = useState('');
  useEffect(() => {
    const GetTonke = async () => {
      const token = await SyncStorage.getItem("access_token");
      return setToken(token);
    }
    GetTonke();
  }, []);
  useEffect(() => {
    setSpinner(true);
    async function addToCarrinho() {
      const userLogado = JSON.parse(await SyncStorage.getItem("user"));
      setUserID(userLogado._id);
    }
    fullsports_api
      .get<IProduto>(`listar-produto/${route.params.idProduto}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then((res) => {
        console.log(res.data.categoriaProduto[Object.keys(res.data.categoriaProduto)[0]].imagemProduto[0])
        setProdutoDetails(res.data);
        setCategoriaProduto(Object.keys(res.data.categoriaProduto)[0]);
        setSpinner(false);
      }).catch((err) => {
        console.log(err)
      });

    addToCarrinho();
  }, [token]);
  function adicionarCarrinho() {
    try {
      SyncStorage.setItem(
        "carrinho",
        JSON.stringify({
          pedido: {
            quantidadePedido: numItems,
            produto: route.params.idProduto,
            clienteID: userID,
          },
        })
      );
    } catch (e) {
      console.log("error is: ", e);
    }

    navigation.navigate("Carrinho");
  }

  return (
    <>
      {!spinner ? (
        <View
          style={[
            style.product_card_container,
            { backgroundColor: GlobalColors.white },
          ]}
        >
          <>
            {console.log(produtoDetails.categoriaProduto)}
            <Image
              source={{
                uri: produtoDetails.categoriaProduto[categoriaProduto]
                  .imagemProduto[0].url,
              }}
              style={style.product_img_bg}
            />
            <View style={style.product_card_desc}>
              <View style={style.product_card_col}>
                <View>
                  <Text style={style.product_card_title}>
                    {produtoDetails.categoriaProduto[categoriaProduto].nome}
                  </Text>
                </View>
                <View style={style.tags_container}>
                  <Text style={style.tag_categories}>
                    {produtoDetails.categoriaProduto[categoriaProduto].cor}
                  </Text>
                  <Text style={style.tag_categories}>
                    {produtoDetails.categoriaProduto[categoriaProduto].sexo}
                  </Text>
                </View>
              </View>
              <View style={style.product_card_row}>
                <View style={style.product_card_qtd_select}>
                  <TouchableOpacity
                    style={style.qtd_select_btn}
                    disabled={numItems == 1}
                    onPress={() => setNumItems(numItems - 1)}
                  >
                    <Text>-</Text>
                  </TouchableOpacity>
                  <Text style={style.qtd_select_btn_txt}>{numItems}</Text>
                  <TouchableOpacity
                    disabled={numItems == parseInt(produtoDetails.categoriaProduto[categoriaProduto].quantidade)}
                    style={style.qtd_select_btn}
                    onPress={() => setNumItems(numItems + 1)}
                  >
                    <Text>+</Text>
                  </TouchableOpacity>
                </View>

                <View>
                  <Text style={style.product_card_price}>
                    R$ {produtoDetails.categoriaProduto[categoriaProduto].preco}
                  </Text>
                </View>
              </View>
              <View
                style={[
                  style.product_card_row,
                  { flexDirection: "column", justifyContent: "flex-start" },
                ]}
              >
                <Text style={style.product_card_desc_title}>
                  Sobre este produto
                </Text>
                <ScrollView style={{ height: 60 }}>
                  <View style={style.desc_info_container}>
                    <View style={style.desc_info}>
                      <Text style={style.desc_info_title}>Marca:</Text>
                      <Text>
                        {produtoDetails.categoriaProduto[
                          categoriaProduto
                        ].fornecedor.nomeEmpresa.slice(0, 30)}
                        {produtoDetails.categoriaProduto[categoriaProduto]
                          .fornecedor.nomeEmpresa.length > 30 ? (
                          <Text>...</Text>
                        ) : (
                          ""
                        )}
                      </Text>
                    </View>
                    <View style={style.desc_info}>
                      <Text style={style.desc_info_title}>Estoque:</Text>
                      <Text>
                        {
                          produtoDetails.categoriaProduto[categoriaProduto]
                            .quantidade
                        }
                      </Text>
                    </View>
                    <Text style={style.product_card_desc_txt}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Facere ut porro modi ab enim recusandae consequuntur minus
                      fugit perferendis dolore ad voluptatem doloremque quas
                      pariatur sequi expedita, harum fugiat totam.
                    </Text>
                  </View>
                </ScrollView>
              </View>
              <View style={[style.product_card_row, { marginVertical: 2 }]}>
                <ButtonGreen
                  width={330}
                  name="Comprar"
                  action={() => console.log("comprar")}
                />
              </View>
              <View style={[style.product_card_row, { marginVertical: 2 }]}>
                <TouchableOpacity onPress={adicionarCarrinho}>
                  <ButtonWhite
                    width={330}
                    name="Adicionar ao carrinho"
                    action={() => { }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </>
        </View>

      ) : (
        <><Text>TESTE</Text ></>
      )}
    </>
  );
};
