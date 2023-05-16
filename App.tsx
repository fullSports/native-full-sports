import "react-native-gesture-handler";
import Login from "./src/App/auth/Login/Login";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/App/Home/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CategoriasList from "./src/App/Pages/CategoriasList/Categorias";
import { View, Text, Image } from "react-native";
import Header from "./src/shared/components/Header/Header";
import { GlobalColors } from "./src/shared/utils/styles/global-colors";
const BottomNavigator = createBottomTabNavigator();

export default function App() {
  // auth
  let authenticated = true;
  return (
    <View style={{ flex: 1 }}>
      <Header>
        {/* define as rotas dos atalhos no bottom */}
        <NavigationContainer>
          <BottomNavigator.Navigator initialRouteName="Home">
            <BottomNavigator.Screen
              name="Home"
              component={Home}
              options={{
                title: "Home",
                headerShown: false,
                tabBarIcon: () => (
                  <MaterialCommunityIcons
                    name="home"
                    size={26}
                    color={GlobalColors.black_opacity}
                  />
                ),
              }}
            />
            <BottomNavigator.Screen
              name="Categorias"
              component={CategoriasList}
              options={{
                title: "Categorias",
                headerShown: false,
                tabBarIcon: () => (
                  <MaterialCommunityIcons
                    name="notebook"
                    size={26}
                    color={GlobalColors.black_opacity}
                  />
                ),
              }}
            />
            {authenticated ? (
              <BottomNavigator.Screen
                name="Carrinho"
                component={Home}
                options={{
                  title: "Pedidos",
                  headerShown: false,
                  tabBarIcon: () => (
                    <MaterialCommunityIcons
                      name="bag-carry-on-check"
                      size={26}
                      color={GlobalColors.black_opacity}
                    />
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
                title: "Login",
                headerShown: false,
                tabBarIcon: () => (
                  <MaterialCommunityIcons
                    name={authenticated ? "account" : "login"}
                    size={26}
                    color={GlobalColors.black_opacity}
                  />
                ),
              }}
            />
          </BottomNavigator.Navigator>
        </NavigationContainer>
      </Header>
    </View>
  );
}
