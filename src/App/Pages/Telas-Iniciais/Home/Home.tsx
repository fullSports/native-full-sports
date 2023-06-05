import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { VerticalCard } from "../../../../shared/components/Cards/VerticalCards/VerticalCard";
import { homeStyle as style } from "./style";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { GlobalStyles as global } from "../../../../../styles-global";
import { useEffect, useState } from "react";
import {
  AccessibilityBar,
  Header,
} from "../../../../shared/components/Header/Header";
import fullsports_api from "../../../../environment/full-sports-api";
import IProduto from "../../../../shared/utils/interfaces/IProduto";
import { SmallVerticalCard } from "../../../../shared/components/Cards/small-horizontal-cards/small-vertical-cards";
import SyncStorage from "@react-native-async-storage/async-storage";
import IRecomendacao from "../../../../shared/utils/interfaces/Recomendacaao/IRecomendacao";
import ICliente from "../../../../shared/utils/interfaces/ICliente";
import IBuscaRecomendacao from "../../../../shared/utils/interfaces/Recomendacaao/IBuscaaRecomendacao";
const homeBanner = require("../../../assets/illustrations/homepage-banner.png");
// const shoeSection = require("../../../assets/illustrations/capa-tenis-section.png");
const productsSection = require("../../../assets/illustrations/capa-producxts-section.png");
const SVGCarregando = require("../../../assets/illustrations/Spinner-1s-200px.gif");
export default function Home({ navigation }) {
  const [listProdutos, setListProdutos] = useState<IProduto[]>([]);
  const [spinner, setSpinner] = useState(false);
  const [listCalcados, setListCalcados] = useState<any>([]);
  const [productType, setProductType] = useState<[]>();
  const [authenticated, setauthenticated] = useState<boolean>(false);
  const [produtosRecomendados, setProdutosReomendados] = useState<IProduto[]>([]);
  useEffect(() => {
    const user = async () => {
      const user = await SyncStorage.getItem("user")
      setSpinner(true);
      if (user != null) {
        const user1 = JSON.parse(user)
        fullsports_api
          .get<IRecomendacao[]>('listar-recomendacoes')
          .then((resRecomendacao) => {
            for (const recomendacao of resRecomendacao.data) {
              if (recomendacao.user._id === user1._id) {
                console.log(recomendacao.click_roupas);
                fullsports_api
                  .get<IBuscaRecomendacao>(`recomendacao/${recomendacao._id}`)
                  .then((res) => {
                    setListProdutos(res.data.producstRemains);
                    setProdutosReomendados(res.data.recommendations);
                    setSpinner(false)
                  })
                  .catch((err) => console.log(err));
                break;
              }
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        fullsports_api
          .get<IProduto[]>('listar-produtos')
          .then((res) => {
            setListProdutos(res.data);
            setSpinner(false);
          })
          .catch((err) => console.log(err));
      }
    }
    user();
  }, [authenticated]);
  setInterval(function () {
    const user = SyncStorage.getItem("user");
    user.then((res) => {
      if (res == null) {
        setauthenticated(false);
      } else {
        setauthenticated(true);
      }
    });
  }, 10);
  // setInterval(() => {
  //   const user = SyncStorage.getItem("user");
  //   user.then((res) => {
  //     if (res == null) {
  //       setauthenticated(false);
  //     } else {
  //       seetUser(JSON.parse(res))
  //       setauthenticated(true);
  //     }
  //   });
  // }, 500)
  return (
    <ScrollView >
      <AccessibilityBar />
      <Header {...navigation} />
      <View style={style.home_banner_container}>
        <Image source={homeBanner} style={style.home_banner} />
      </View>
      {!spinner ? <>
        {!authenticated ? (<>
          <Text style={global.sectionTitle}>Ofertas da Semana</Text>
          {/* <ScrollView horizontal={true}>
          <View style={style.homeView}>
            <View style={style.cardSlider}>
              {listProdutos?.map((item: IProduto) => {
                let obj = Object.keys(item.categoriaProduto)[0].toString() as
                  | "roupa"
                  | "equipamento"
                  | "suplemento"
                  | "calcado";
                let parcelamento = (
                  parseFloat(item.categoriaProduto[obj].preco) / 12
                ).toFixed(2);
                parcelamento.replace(".", ",");
                if (parseFloat(item.categoriaProduto[obj].preco) < 60) {
                  return (
                    <TouchableOpacity
                      key={item._id}
                      onPress={() =>
                        navigation.navigate("ProdutoDetalhes", {
                          idProduto: item._id,
                        })
                      }
                    >
                      <VerticalCard
                        src={item.categoriaProduto[obj].imagemProduto[0].url}
                        PrecoAtual={item.categoriaProduto[obj].preco}
                        precoParcelado={parcelamento}
                        key={item._id}
                        produtoName={item.categoriaProduto[obj].nome}
                      />
                    </TouchableOpacity>
                  );
                }
              })}
            </View>
          </View>
        </ScrollView> */}
        </>) :
          (<>
            <Text style={global.sectionTitle}>Recomendados para Você</Text>
            <ScrollView horizontal={true}>
              <View style={style.homeView}>
                <View style={style.cardSlider}>
                  {produtosRecomendados?.map((item: IProduto) => {
                    let obj = Object.keys(item.categoriaProduto)[0].toString() as
                      | "roupa"
                      | "equipamento"
                      | "suplemento"
                      | "calcado";
                    let parcelamento = (
                      parseFloat(item.categoriaProduto[obj].preco) / 12
                    ).toFixed(2);
                    parcelamento.replace(".", ",");

                    return (
                      <TouchableOpacity
                        key={item._id}
                        onPress={() =>
                          navigation.navigate("ProdutoDetalhes", {
                            idProduto: item._id,
                          })
                        }
                      >
                        <VerticalCard
                          src={item.categoriaProduto[obj].imagemProduto[0].url}
                          PrecoAtual={item.categoriaProduto[obj].preco}
                          precoParcelado={parcelamento}
                          key={item._id}
                          produtoName={item.categoriaProduto[obj].nome}
                        />
                      </TouchableOpacity>
                    );

                  })}
                </View>
              </View>
            </ScrollView>
          </>)}
      </> : <>
      </>}
      {/* <Button title="aaa" onPress={() => navigation.navigate("Login")} /> */}
      {!spinner ?
        <SafeAreaView style={style.home_banner_container}>
          <Image source={productsSection} style={style.section_banner} />
          <FlatList
            numColumns={2}
            maxToRenderPerBatch={2}
            data={listProdutos}
            renderItem={({ item }) => {
              let obj = Object.keys(item.categoriaProduto)[0].toString() as
                | "roupa"
                | "equipamento"
                | "suplemento"
                | "calcado";
              let parcelamento = (
                parseFloat(item.categoriaProduto[obj].preco) / 12
              ).toFixed(2);
              parcelamento.replace(".", ",");

              // if (String(obj) == "calcado") {
              return (
                <SafeAreaView style={{ height: 310, width: 185 }}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("ProdutoDetalhes", {
                        idProduto: item._id,
                      })
                    }
                  >
                    <SmallVerticalCard
                      key={item._id}
                      produtoName={item.categoriaProduto[obj].nome}
                      PrecoAtual={item.categoriaProduto[obj].preco}
                      src={item.categoriaProduto[obj].imagemProduto[0].url}
                      precoParcelado={item.categoriaProduto[obj].preco}
                      linkTo="ProdutoDetalhes"
                    />
                  </TouchableOpacity>
                </SafeAreaView>
              );
              // } else {
              //   return <></>;
              // }
            }}
            keyExtractor={(item) => item._id}
          />
        </SafeAreaView>
        : <View style={style.home_banner_container}>
          <Image source={SVGCarregando} style={global.Carregando} />
        </View>
      }
      {/* <View style={style.home_banner_container}>
          <Text style={global.sectionTitle}>Recomendados para você</Text>
          <FlatList
            maxToRenderPerBatch={4}
            initialNumToRender={2}
            style={{
              // height: "fit-content",
              overflow: "hidden",
              marginVertical: 15,
            }}
            numColumns={2}
            keyExtractor={(item, idx) => item.name}
            data={selecaoProdutos}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("ProdutoDetalhes")}
              >
                <HorizontalCard
                  key={item.id}
                  name={item.name}
                  precoAnterior={item.precoAnterior}
                  precoAtual={item.precoAtual}
                  parcelamento={item.parcelamento}
                  imgProduto={item.imgProduto}
                  linkTo="Login"
                />
              </TouchableOpacity>
            )}
          />
        </View> */}
      {/* </Header> */}
    </ScrollView>
  );
}
