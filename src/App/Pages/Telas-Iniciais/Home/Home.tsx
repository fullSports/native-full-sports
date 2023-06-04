import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { VerticalCard } from "../../../../shared/components/Cards/VerticalCards/VerticalCard";
import { homeStyle as style } from "./style";
import { selecaoProdutos } from "../../../../shared/utils/data/teste-cards";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { GlobalStyles as global } from "../../../../../styles-global";
import { HorizontalCard } from "../../../../shared/components/Cards/horizontal-cards/horizontal-card.tsx";
import { useEffect, useState } from "react";
import {
  AccessibilityBar,
  Header,
} from "../../../../shared/components/Header/Header";
import fullsports_api from "../../../../environment/full-sports-api";
import IProduto from "../../../../shared/utils/interfaces/IProduto";
import { SmallVerticalCard } from "../../../../shared/components/Cards/small-horizontal-cards/small-vertical-cards";
import ICacados from "../../../../shared/utils/interfaces/Produtos/ICalcados";
const homeBanner = require("../../../assets/illustrations/homepage-banner.png");
// const shoeSection = require("../../../assets/illustrations/capa-tenis-section.png");
const productsSection = require("../../../assets/illustrations/capa-producxts-section.png");

export default function Home({ navigation }) {
  const [listProdutos, setListProdutos] = useState<IProduto[]>([]);
  const [listCalcados, setListCalcados] = useState<any>([]);
  const [productType, setProductType] = useState<[]>();

  useEffect(() => {
    fullsports_api
      .get("listar-produtos")
      .then((res) => {
        setListProdutos(res.data);
        setProductType(res.data.categoriaProduto);
      })
      .catch((e) => {
        console.log("Error is: ", e);
      });

    fullsports_api
      .get("buscar-produto/calcados")
      .then((res) => {
        setListCalcados(res.data);
      })
      .catch((e) => {
        console.log("Error is: ", e);
      });
  }, []);

  return (
    <ScrollView>
      <AccessibilityBar />
      <Header>
        <View style={style.home_banner_container}>
          <Image source={homeBanner} style={style.home_banner} />
        </View>
        <Text style={global.sectionTitle}>ofertas da semana</Text>
        <View style={style.homeView}>
          <View style={style.cardSlider}>
            {listProdutos?.map((item: IProduto) => {
              //   listProdutos.map((item: IProduto) => {
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

        {/* <Button title="aaa" onPress={() => navigation.navigate("Login")} /> */}

        <SafeAreaView style={style.home_banner_container}>
          <Image source={productsSection} style={style.section_banner} />

          <FlatList
            initialNumToRender={15}
            numColumns={2}
            maxToRenderPerBatch={2}
            data={listCalcados}
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
                    onPress={() => navigation.navigate("ProdutoDetalhes")}
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
      </Header>
    </ScrollView>
  );
}
