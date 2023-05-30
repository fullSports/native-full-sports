import "react-native-gesture-handler";
import Login from "./src/App/auth/Login/Login";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/App/Pages/Telas-Iniciais/Home/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { GlobalColors } from "./src/shared/utils/styles/global-colors";
import { GlobalStyles } from "./styles-global";
import { ProdutoDetalhes } from "./src/App/Pages/Produtos/Produto-detalhes";
import UserPedidos from "./src/App/Pages/Pedidos/user-pedidos";
import { WelcomeScreen } from "./src/App/Pages/Telas-Iniciais/WelcomeScreen/welcome-screen";
import { CadastroUsuario } from "./src/App/auth/Cadastro/Cadastro";
import CategoriasList from "./src/App/Pages/Categorias-List/Categorias";
import { Carrinho } from "./src/App/Pages/Carrinho/carrinho";
import { EditUserProfile } from "./src/App/Pages/User-Screens/edit-profile.tsx/edit-profile";
import { UserNavigation } from "./src/App/Pages/User-Screens/user-navigation/user-navigation";
const BottomNavigator = createBottomTabNavigator();

export default function App(navigation) {
  // auth
  let authenticated = true;

  return (
    <>
      <View style={{ flex: 1 }}>
        {/* define as rotas dos atalhos no bottom */}
        <NavigationContainer>
          <BottomNavigator.Navigator initialRouteName="UserNavigation">
            <BottomNavigator.Screen
              name="Home"
              component={Home}
              options={({ route }) => ({
                // tabBarStyle: ((route) => {
                //   // const routeName = getFocusedRouteNameFromRoute(route);
                //   // const routeName = useRoute().name;
                //   // const routeName = navigation.route.name;
                //   const activeRoute = getActiveRouteState(this.props.navigation.state);
                //   console.log(routeName);
                //   if (routeName == "WelcomeScreen") {
                //     return { display: "none" };
                //   }
                //   return;
                // })(route),
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
              })}
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
                name="UserPedidos"
                component={UserPedidos}
                options={{
                  tabBarLabelStyle: {
                    display: "none",
                  },
                  title: "UserPedidos",
                  headerShown: false,
                  tabBarIcon: ({ focused }) => (
                    <>
                      <MaterialCommunityIcons
                        name="table"
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
                        Pedidos
                      </Text>
                    </>
                  ),
                }}
              />
            ) : (
              <></>
            )}
            <BottomNavigator.Screen
              name={authenticated ? "UserNavigation" : "Login"}
              component={authenticated ? UserNavigation : Login}
              options={{
                tabBarLabelStyle: {
                  display: "none",
                },
                title: authenticated ? "UserNavigation" : "Login",
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
                      {authenticated ? "Conta" : "Login"}
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
            <BottomNavigator.Screen
              options={{
                headerShown: false,
                tabBarItemStyle: {
                  display: "none",
                },
              }}
              name="Login"
              component={Login}
            />
            <BottomNavigator.Screen
              options={{
                headerShown: false,
                tabBarItemStyle: {
                  display: "none",
                },
              }}
              name="CadastroUsuario"
              component={CadastroUsuario}
            />
            <BottomNavigator.Screen
              options={{
                headerShown: false,
                tabBarItemStyle: {
                  display: "none",
                },
              }}
              name="WelcomeScreen"
              component={WelcomeScreen}
            />
            <BottomNavigator.Screen
              options={{
                headerShown: false,
                tabBarItemStyle: {
                  display: "none",
                },
              }}
              name="Carrinho"
              component={Carrinho}
            />
            <BottomNavigator.Screen
              options={{
                headerShown: false,
                tabBarItemStyle: {
                  display: "none",
                },
              }}
              name="EditUserProfile"
              component={EditUserProfile}
            />
          </BottomNavigator.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}
