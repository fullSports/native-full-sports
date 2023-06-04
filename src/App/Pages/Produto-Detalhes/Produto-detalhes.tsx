import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { DetalheStyles as style } from "./Produto-detalhes-styles";
import { useEffect, useState } from "react";
import { GlobalStyles } from "../../../../styles-global";
import SelectDropdown from "react-native-select-dropdown";
import { GlobalColors } from "../../../shared/utils/styles/global-colors";
import {
  ButtonGreen,
  ButtonWhite,
} from "../../../shared/components/Buttons/default-buttons";
import fullsports_api from "../../../environment/full-sports-api";
import IProduto from "../../../shared/utils/interfaces/IProduto";
import Iimagem from "../../../shared/utils/interfaces/Iimagem";

const imgIlustrativa = require("../../assets/illustrations/teste_product_card.png");

export const ProdutoDetalhes = ({ route, navigation }) => {
  const [numItems, setNumItems] = useState<number>(0);
  const [produtoDetails, setProdutoDetails] = useState<IProduto>();
  const [categoriaProduto, setCategoriaProduto] = useState<string>("");
  const [produtoImagens, setProdutoImagens] = useState<Iimagem>();

  const cores = [{ cor: "rosa" }, { cor: "azul" }, { cor: "preto" }];
  const tamanho = [{ tamanho: "GG" }, { tamanho: "G" }, { tamanho: "M" }];

  useEffect(() => {
    // console.log(route.params.category);
    // console.log(route.params.route);

    fullsports_api
      .get<IProduto>(`listar-produto/${route.params.idProduto}`)
      .then((res) => {
        setProdutoDetails(res.data);
        setCategoriaProduto(Object.keys(res.data.categoriaProduto)[0]);
      });
  }, [ProdutoDetalhes]);

  console.log(produtoDetails);

  return (
    <>
      {produtoDetails ? (
        <View
          style={[
            style.product_card_container,
            { backgroundColor: GlobalColors.white },
          ]}
        >
          <>
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
                    disabled={numItems == 0}
                    onPress={() => setNumItems(numItems - 1)}
                  >
                    <Text>-</Text>
                  </TouchableOpacity>
                  <Text style={style.qtd_select_btn_txt}>{numItems}</Text>
                  <TouchableOpacity
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
                <ScrollView style={{ height: 80 }}>
                  <View style={style.desc_info_container}>
                    <View style={style.desc_info}>
                      <Text style={style.desc_info_title}>Marca:</Text>
                      <Text>
                        {produtoDetails.categoriaProduto[
                          categoriaProduto
                        ].fornecedor.nomeEmpresa.slice(0, 30)}
                        ...
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
                  </View>
                  <Text style={style.product_card_desc_txt}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Facere ut porro modi ab enim recusandae consequuntur minus
                    fugit perferendis dolore ad voluptatem doloremque quas
                    pariatur sequi expedita, harum fugiat totam.
                  </Text>
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
                <ButtonWhite
                  width={330}
                  name="Adicionar ao carrinho"
                  action={() =>
                    navigation.navigate("Carrinho", {
                      exemplo: "hello world",
                    })
                  }
                />
              </View>
            </View>
          </>
        </View>
      ) : (
        <></>
      )}
    </>
  );
};
