import { StyleSheet, View, Image } from "react-native";

const spinnerImg = require("./../../../App/assets/illustrations/loader.gif");

export const CustomSpinner = () => {
  return (
    <View style={styles.carregando_container}>
      <Image source={spinnerImg} style={styles.Carregando} />
    </View>
  );
};

const styles = StyleSheet.create({
  Carregando: {
    justifyContent: "center",
    width: "50%",
    height: 100,
  },
  carregando_container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});
