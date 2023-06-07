import { FlatList, ScrollView, View, Text } from "react-native";
import { AccessibilityBar } from "../../../shared/components/Header/Header";
import { useEffect, useState } from "react";
import fullsports_api from "../../../environment/full-sports-api";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SmallVerticalCard } from "../../../shared/components/Cards/small-horizontal-cards/small-vertical-cards";
import { categoriasStyles as style } from "./categorias-busca-styles";
import { GlobalStyles as global } from "../../../../styles-global";
import SyncStorage from "@react-native-async-storage/async-storage";
export const CategoriasBusca = ({ route, navigation }) => {
  const [categoriaProdutos, setCategoriaProdutos] = useState([]);
  const [token, setToken] = useState('');
  useEffect(() => {
    const GetTonke = async () => {
      const token = await SyncStorage.getItem("access_token");
      return setToken(token);
    }
    GetTonke();
  }, []);
  useEffect(() => {
    fullsports_api
      .get(`buscar-produto/${route.params.route}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then((res) => {
        setCategoriaProdutos(res.data);
      })
      .catch((e) => {
        console.log("Error is: ", e);
      });
  }, [token])

  return (
    <>
      <AccessibilityBar />
      <ScrollView>
        <View style={style.roupas_container}>
          {/* <Text style={global.section_title}>{route.params.pageName}</Text> */}
          <Text style={[global.section_title, { marginBottom: 25 }]}>
            {route.params.pageName}
          </Text>
          <FlatList
            initialNumToRender={15}
            numColumns={2}
            maxToRenderPerBatch={2}
            data={categoriaProdutos}
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

              return (
                <SafeAreaView style={{ height: 325, width: 190 }}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("ProdutoDetalhes", {
                        idProduto: item._id,
                        // category: route.params.route,
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
            }}
            keyExtractor={(item) => item._id}
          />
        </View>
      </ScrollView>
    </>
  );
};
