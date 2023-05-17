import {
  Text,
  View,
  Image,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from "react-native";
import { VerticalCard } from "../../shared/components/Cards/VerticalCards/VerticalCard";
import { homeStyle } from "./style";
import { selecaoProdutos } from "../../shared/utils/data/teste-cards";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { GlobalStyles } from "../../../styles-global";
import { HorizontalCard } from "../../shared/components/Cards/HorizontalCards/horizontal-card.tsx";
import { useEffect } from "react";
import { Header } from "../../shared/components/Header/Header";
const homeBanner = require("../..//App/assets/illustrations/homepage-banner.png");
const shoeSection = require("../..//App/assets/illustrations/capa-tenis-section.png");

export default function Home({ navigation, route }) {
  useEffect(() => {
    console.log(selecaoProdutos.length);
  });
  return (
    <ScrollView>
      <Header>
        <View style={homeStyle.home_banner_container}>
          <Image source={homeBanner} style={homeStyle.home_banner} />
        </View>
        <Text style={GlobalStyles.sectionTitle}>ofertas da semana</Text>
        <View style={homeStyle.homeView}>
          <View style={homeStyle.cardSlider}>
            {selecaoProdutos?.map((item, i) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("ProdutoDetalhes")}
              >
                <VerticalCard
                  key={i}
                  name={item.name}
                  precoAnterior={item.precoAnterior}
                  precoAtual={item.precoAtual}
                  parcelamento={item.parcelamento}
                  imgProduto={item.imgProduto}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* <Button title="aaa" onPress={() => navigation.navigate("Login")} /> */}

        <View style={homeStyle.home_banner_container}>
          <Image source={shoeSection} style={GlobalStyles.section_banner} />
          <FlatList
            maxToRenderPerBatch={4}
            initialNumToRender={2}
            style={{ height: "fit-content", overflow: "hidden" }}
            numColumns={2}
            keyExtractor={(item) => item.name}
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
      </Header>
    </ScrollView>
  );
}
