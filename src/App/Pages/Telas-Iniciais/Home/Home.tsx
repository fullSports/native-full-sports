import { Text, View, Image, TouchableOpacity } from "react-native";
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
const homeBanner = require("../../../assets/illustrations/homepage-banner.png");
// const shoeSection = require("../../../assets/illustrations/capa-tenis-section.png");
const productsSection = require("../../../assets/illustrations/capa-producxts-section.png");

export default function Home({ navigation }) {
  const [listProdutos, setListProdutos] = useState<IProduto[]>([]);
  const [productType, setProductType] = useState<[]>();
  let obj;
  useEffect(() => {
    fullsports_api
      .get("listar-produtos")
      .then((res) => {
        setListProdutos(res.data);
        setProductType(res.data.categoriaProduto);
      })
      .catch((e) => {
        console.log("Error: ", e);
      });

    listProdutos.map((item: IProduto) => {
      obj = Object.keys(item.categoriaProduto)[0].toString() as
        | "roupa"
        | "equipamento"
        | "suplemento"
        | "calcado";
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
            {listProdutos?.map((item: IProduto) => (
              <TouchableOpacity
                key={item._id}
                onPress={() => navigation.navigate("ProdutoDetalhes")}
              >
                {/* <VerticalCard name={item.categoriaProduto[obj].nome} /> */}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* <Button title="aaa" onPress={() => navigation.navigate("Login")} /> */}

        {/* <View style={style.home_banner_container}>
          <Image source={productsSection} style={style.section_banner} />
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
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
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
        </View>

        <View style={style.home_banner_container}>
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
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
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
