import { FlatList, ScrollView, View, Text, Image } from "react-native";
import { AccessibilityBar } from "../../../shared/components/Header/Header";
import { useEffect, useState } from "react";
import fullsports_api from "../../../environment/full-sports-api";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SmallVerticalCard } from "../../../shared/components/Cards/small-horizontal-cards/small-vertical-cards";
import { categoriasStyles as style } from "./categorias-busca-styles";
import { GlobalStyles as global } from "../../../../styles-global";
import { getTonken } from "../../../shared/utils/functions/get-token-access";
import { useIsFocused } from "@react-navigation/native";
import { CustomSpinner } from "../../../shared/components/Spinner/custom-spinner";
import IProduto from "../../../shared/utils/interfaces/IProduto";

export const CategoriasBusca = ({ route, navigation }) => {
  const isFocused = useIsFocused();

  const [spinner, setSpinner] = useState<boolean>(false);
  const [categoriaProdutos, setCategoriaProdutos] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    const buscaProduto = async () => {
      setSpinner(true);
      getTonken(setToken);
      if (isFocused) {
        fullsports_api
          .get(`buscar-produto/${route.params.route}`, {
            // .get(`buscar-produto/calcados`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            console.log(res.data)
            setCategoriaProdutos(res.data);
            setSpinner(false);
          })
          .catch((e) => {
            console.log("Error is: ", e);
          });
      }
    };
    buscaProduto();
  }, [token, isFocused]);

  return (
    <>
      <AccessibilityBar />
      {categoriaProdutos && !spinner ? (
        <ScrollView>
          <View style={global.row_2_items}>
            {categoriaProdutos?.map((item: IProduto) => {
              const obj = Object.keys(item.categoriaProduto)[0].toString() as
                | "roupa"
                | "equipamento"
                | "suplemento"
                | "calcado";
              let parcelamento = (
                parseFloat(item.categoriaProduto[obj].preco) / 12
              ).toFixed(2);
              parcelamento.replace(".", ",");
              console.log()

              return (
                <View style={{ margin: 2 }} key={`view-produto-${item._id}`}>
                  <TouchableOpacity
                    key={item._id}
                    onPress={() =>
                      navigation.navigate("ProdutoDetalhes", {
                        idProduto: item._id,
                      })
                    }
                  >
                    <SmallVerticalCard
                      src={item.categoriaProduto[obj].imagemProduto[0].url}
                      PrecoAtual={item.categoriaProduto[obj].preco}
                      precoParcelado={parcelamento}
                      key={item._id}
                      produtoName={item.categoriaProduto[obj].nome}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        // <ScrollView>
        //   <View style={style.roupas_container}>
        //     {/* <Text style={global.section_title}>{route.params.pageName}</Text> */}
        //     <Text style={[global.section_title, { marginBottom: 25 }]}>
        //       {route.params.pageName}
        //     </Text>
        //     <FlatList
        //       initialNumToRender={15}
        //       numColumns={2}
        //       maxToRenderPerBatch={2}
        //       data={categoriaProdutos}
        //       renderItem={({ item }) => {
        //         let obj = Object.keys(item.categoriaProduto)[0].toString() as
        //           | "roupa"
        //           | "equipamento"
        //           | "suplemento"
        //           | "calcado";
        //         let parcelamento = (
        //           parseFloat(item.categoriaProduto[obj].preco) / 12
        //         ).toFixed(2);
        //         parcelamento.replace(".", ",");

        //         return (
        //           <View style={global.row_2_items}>
        //             <TouchableOpacity
        //               onPress={() =>
        //                 navigation.navigate("ProdutoDetalhes", {
        //                   idProduto: item._id,
        //                   // category: route.params.route,
        //                 })
        //               }
        //             >
        //               <SmallVerticalCard
        //                 key={item._id}
        //                 produtoName={item.categoriaProduto[obj].nome}
        //                 PrecoAtual={item.categoriaProduto[obj].preco}
        //                 src={item.categoriaProduto[obj].imagemProduto[0].url}
        //                 precoParcelado={item.categoriaProduto[obj].preco}
        //                 linkTo="ProdutoDetalhes"
        //               />
        //             </TouchableOpacity>
        //           </View>
        //         );
        //       }}
        //       keyExtractor={(item) => item._id}
        //     />
        //   </View>
        // </ScrollView>
        <CustomSpinner />
      )}
    </>
  );
};
