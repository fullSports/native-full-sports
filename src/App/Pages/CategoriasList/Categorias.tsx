import { ImageBackground, View, Text } from "react-native";
import { CategoriaStyles } from "./Categorias-styles";

const imgTeste = require("../../assets/bgs/testeBg.png");

export default function CategoriasList() {
  return (
    <>
      <View style={CategoriaStyles.categoriasContainer}>
        <View style={CategoriaStyles.categoriasRow}>
          <View style={CategoriaStyles.CategoryCard}>
            <ImageBackground
              source={imgTeste}
              resizeMode="cover"
              style={CategoriaStyles.imgBg}
            >
              <View style={CategoriaStyles.CategoryCardCover}>
                <Text style={CategoriaStyles.CategoryCardText}>Produtos</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={CategoriaStyles.CategoryCard}>
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
        </View>
        <View style={CategoriaStyles.categoriasRow}>
          <View style={CategoriaStyles.CategoryCard}>
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
          <View style={CategoriaStyles.CategoryCard}>
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
        </View>

        <View style={CategoriaStyles.categoriasRow}>
          <View style={CategoriaStyles.CategoryCard}>
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
        </View>
      </View>
    </>
  );
}
