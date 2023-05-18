import "react-native-gesture-handler";
import Login from "./src/App/auth/Login/Login";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/App/Home/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CategoriasList from "./src/App/Pages/CategoriasList/Categorias";
import { View, Text, Image } from "react-native";
import { Header } from "./src/shared/components/Header/Header";
import { GlobalColors } from "./src/shared/utils/styles/global-colors";
import { GlobalStyles } from "./styles-global";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ProdutoDetalhes } from "./src/App/Pages/Produtos/Produto-detalhes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const BottomNavigator = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  // auth
  let authenticated = false;
  return (
    <>
      <View style={{ flex: 1 }}>
        {/* define as rotas dos atalhos no bottom */}
        <NavigationContainer>
          <BottomNavigator.Navigator initialRouteName="ProdutoDetalhes">
            <BottomNavigator.Screen
              name="Home"
              component={Home}
              options={{
                tabBarLabelStyle: {
                  display: "none",
                },
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                  <>
                    <MaterialCommunityIcons
                      name="home"
                      size={22}
                      color={
                        focused
                          ? GlobalColors.neon_green
                          : GlobalColors.black_opacity
                      }
                    />
                    <Text
                      style={[
                        GlobalStyles.bottom_tab_txt,
                        focused
                          ? { color: GlobalColors.neon_green }
                          : { color: GlobalColors.light_grey },
                      ]}
                    >
                      Home
                    </Text>
                  </>
                ),
              }}
            />
            <BottomNavigator.Screen
              name="Categorias"
              component={CategoriasList}
              options={{
                tabBarLabelStyle: {
                  display: "none",
                },
                title: "Categorias",
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                  <>
                    <MaterialCommunityIcons
                      name="notebook"
                      size={22}
                      color={
                        focused
                          ? GlobalColors.neon_green
                          : GlobalColors.black_opacity
                      }
                    />

                    <Text
                      style={[
                        GlobalStyles.bottom_tab_txt,
                        focused
                          ? { color: GlobalColors.neon_green }
                          : { color: GlobalColors.light_grey },
                      ]}
                    >
                      Categorias
                    </Text>
                  </>
                ),
              }}
            />
            {authenticated ? (
              <BottomNavigator.Screen
                name="Carrinho"
                component={Home}
                options={{
                  tabBarLabelStyle: {
                    display: "none",
                  },
                  title: "Pedidos",
                  headerShown: false,
                  tabBarIcon: ({ focused }) => (
                    <>
                      <MaterialCommunityIcons
                        name="bag-carry-on-check"
                        size={22}
                        color={
                          focused
                            ? GlobalColors.neon_green
                            : GlobalColors.black_opacity
                        }
                      />

                      <Text
                        style={[
                          GlobalStyles.bottom_tab_txt,
                          focused
                            ? { color: GlobalColors.neon_green }
                            : { color: GlobalColors.light_grey },
                        ]}
                      >
                        Categorias
                      </Text>
                    </>
                  ),
                }}
              />
            ) : (
              <></>
            )}
            <BottomNavigator.Screen
              name={authenticated ? "Perfil" : "Login"}
              component={authenticated ? Home : Login}
              options={{
                tabBarLabelStyle: {
                  display: "none",
                },
                title: authenticated ? "Perfil" : "Login",
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                  <>
                    <MaterialCommunityIcons
                      name={authenticated ? "account" : "login"}
                      size={22}
                      color={
                        focused
                          ? GlobalColors.neon_green
                          : GlobalColors.black_opacity
                      }
                    />

                    <Text
                      style={[
                        GlobalStyles.bottom_tab_txt,
                        focused
                          ? { color: GlobalColors.neon_green }
                          : { color: GlobalColors.light_grey },
                      ]}
                    >
                      {authenticated ? "Perfil" : "Login"}
                    </Text>
                  </>
                ),
              }}
            />
            {/* páginas que nao estao no bottom menu */}
            <BottomNavigator.Screen
              options={{
                headerShown: false,
                tabBarItemStyle: {
                  display: "none",
                },
              }}
              name="ProdutoDetalhes"
              component={ProdutoDetalhes}
            />
          </BottomNavigator.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}
