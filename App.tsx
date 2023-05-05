import "react-native-gesture-handler";
import Login from "./src/App/auth/Login/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/App/Home/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Teste from "./src/App/Teste/Testel";
import CategoriasList from "./src/App/Pages/CategoriasList/Categorias";
const Stack = createNativeStackNavigator();
const BottomNavigator = createBottomTabNavigator();

export default function App() {
  // auth
  let authenticated = false;
  return (
    <>
      {/* define as rotas dos atalhos no bottom */}
      <NavigationContainer>
        <BottomNavigator.Navigator initialRouteName="Login">
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
                  color={"#16C172"}
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
                  color={"#16C172"}
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
                    color={"#16C172"}
                  />
                ),
              }}
            />
          ) : (
            <></>
          )}
          <BottomNavigator.Screen
            name="Login"
            component={Login}
            options={{
              title: "Login",
              headerShown: false,
              tabBarIcon: () => (
                <MaterialCommunityIcons
                  name={authenticated ? "account" : "login"}
                  size={26}
                  color={"#16C172"}
                />
              ),
            }}
          />
        </BottomNavigator.Navigator>
      </NavigationContainer>

      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Teste"
            component={Teste}
            options={{ title: "Teste" }}
          />
        </Stack.Navigator>
      </NavigationContainer> */}
    </>
    // tentativa de sidenav
    // <Drawer.Navigator initialRouteName="Login">
    //   <Drawer.Screen name="Home" component={Home} />
    //   <Drawer.Screen name="Login" component={Login} />
    // </Drawer.Navigator>
  );
}
