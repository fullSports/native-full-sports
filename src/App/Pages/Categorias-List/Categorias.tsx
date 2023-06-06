import { ImageBackground, View, Text, TouchableOpacity } from "react-native";
import { CategoriaStyles } from "./Categorias-styles";
import { AccessibilityBar } from "../../../shared/components/Header/Header";

const imgTeste = require("../../assets/bgs/testeBg.png");

export const CategoriasList = ({ navigation }) => {
  return (
    <>
      <AccessibilityBar />
      <View style={CategoriaStyles.categoriasContainer}>
        <TouchableOpacity
          style={CategoriaStyles.CategoryCard}
          onPress={() =>
            navigation.navigate("CategoriasBusca", {
              route: "roupas",
              pageName: "Roupas",
            })
          }
        >
          <View style={{ height: 90 }}>
            <ImageBackground
              source={imgTeste}
              resizeMode="cover"
              style={CategoriaStyles.imgBg}
            >
              <View style={CategoriaStyles.CategoryCardCover}>
                <Text style={CategoriaStyles.CategoryCardText}>Roupas</Text>
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={CategoriaStyles.CategoryCard}
          onPress={() =>
            navigation.navigate("CategoriasBusca", {
              route: "calcados",
              pageName: "Calçados",
            })
          }
        >
          <View style={{ height: 90 }}>
            <ImageBackground
              source={imgTeste}
              resizeMode="cover"
              style={CategoriaStyles.imgBg}
            >
              <View style={CategoriaStyles.CategoryCardCover}>
                <Text style={CategoriaStyles.CategoryCardText}>calçados</Text>
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={CategoriaStyles.CategoryCard}
          onPress={() =>
            navigation.navigate("CategoriasBusca", {
              route: "suplementos",
              pageName: "Suplementos",
            })
          }
        >
          <View style={{ height: 90 }}>
            <ImageBackground
              source={imgTeste}
              resizeMode="cover"
              style={CategoriaStyles.imgBg}
            >
              <View style={CategoriaStyles.CategoryCardCover}>
                <Text style={CategoriaStyles.CategoryCardText}>
                  suplementos
                </Text>
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={CategoriaStyles.CategoryCard}
          onPress={() =>
            navigation.navigate("CategoriasBusca", {
              route: "equipamentos",
              pageName: "Equipamentos",
            })
          }
        >
          <View style={{ height: 90 }}>
            <ImageBackground
              source={imgTeste}
              resizeMode="cover"
              style={CategoriaStyles.imgBg}
            >
              <View style={CategoriaStyles.CategoryCardCover}>
                <Text style={CategoriaStyles.CategoryCardText}>
                  equipamentos
                </Text>
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};
