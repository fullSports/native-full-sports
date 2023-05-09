import { Text, View } from "react-native";
import VerticalCard from "../../shared/components/Cards/VerticalCards";
import { homeStyle } from "./style";

export default function Home({ navigation, route }) {
  return (
    <View style={homeStyle.homeView}>
      <Text>Homee!</Text>
      <View style={homeStyle.cardSlider}>
        <VerticalCard />
      </View>
    </View>
  );
}
