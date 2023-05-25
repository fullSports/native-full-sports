import { Image, ScrollView, Text, TextInput, View } from "react-native";
import { CadastroUsuarioStyles as style } from "./Cadastro-styles";
import { GlobalStyles as global } from "../../../../styles-global";
import { GlobalColors } from "../../../shared/utils/styles/global-colors";
import { ButtonGreen } from "../../../shared/components/Buttons/Default-Buttons";
import { TouchableOpacity } from "react-native-gesture-handler";

const fullSportsLogo = require("./../../assets/illustrations/full-sports-logo.png");

export const CadastroUsuario = ({ navigation }) => {
  return (
    <ScrollView style={global.screenContainer}>
      <Image source={fullSportsLogo} style={style.logo_header} />
      <View style={style.form_row_1}>
        <View style={style.form_item_row}>
          <Text style={style.form_label}>Nome</Text>
          <TextInput
            placeholderTextColor={GlobalColors.input_placeholder}
            placeholder="Informe seu nome completo"
            style={style.form_input_text}
          />
        </View>
      </View>
      <View style={style.form_row_2}>
        <View style={style.form_item_row_2}>
          <Text style={style.form_label}>CPF (somente números)</Text>
          <TextInput
            placeholderTextColor={GlobalColors.input_placeholder}
            placeholder="00.000.000-00"
            style={style.form_input_text}
          />
        </View>
        <View style={style.form_item_row_2}>
          <Text style={style.form_label}>Data de nascimento</Text>
          <TextInput
            placeholderTextColor={GlobalColors.input_placeholder}
            placeholder="dd/mm/aaaa"
            style={style.form_input_text}
          />
        </View>
      </View>
      <View style={style.form_row_2}>
        <View style={style.form_item_row_2}>
          <Text style={style.form_label}>CEP (somente números)</Text>
          <TextInput
            placeholderTextColor={GlobalColors.input_placeholder}
            placeholder="00000-000"
            style={style.form_input_text}
          />
        </View>
        <View style={style.form_item_row_2}>
          <Text style={style.form_label}>Rua</Text>
          <TextInput
            placeholderTextColor={GlobalColors.input_placeholder}
            placeholder="Ex.: Rua Alegria"
            style={style.form_input_text}
          />
        </View>
      </View>
      <View style={style.form_row_2}>
        <View style={style.form_item_row_2}>
          <Text style={style.form_label}>Bairro</Text>
          <TextInput
            placeholderTextColor={GlobalColors.input_placeholder}
            placeholder="Ex.: Bairro Felicidade"
            style={style.form_input_text}
          />
        </View>
        <View style={style.form_item_row_2}>
          <Text style={style.form_label}>Estado</Text>
          <TextInput
            placeholderTextColor={GlobalColors.input_placeholder}
            placeholder="Ex.: SP"
            style={style.form_input_text}
          />
        </View>
      </View>
      <View style={style.form_row_2}>
        <View style={style.form_item_row_2}>
          <Text style={style.form_label}>Cidade</Text>
          <TextInput
            placeholderTextColor={GlobalColors.input_placeholder}
            placeholder="Ex.: São Paulo"
            style={style.form_input_text}
          />
        </View>
        <View style={style.form_item_row_2}>
          <Text style={style.form_label}>Número</Text>
          <TextInput
            placeholderTextColor={GlobalColors.input_placeholder}
            placeholder="Ex.: 190"
            style={style.form_input_text}
          />
        </View>
      </View>
      <View style={style.form_row_1}>
        <View style={style.form_item_row}>
          <Text style={style.form_label}>E-mail</Text>
          <TextInput
            placeholderTextColor={GlobalColors.input_placeholder}
            placeholder="E-mail de contato"
            style={style.form_input_text}
          />
        </View>
      </View>
      <View style={style.form_row_1}>
        <View style={style.form_item_row}>
          <Text style={style.form_label}>Senha</Text>
          <TextInput
            placeholderTextColor={GlobalColors.input_placeholder}
            placeholder="Sua senha"
            style={style.form_input_text}
          />
        </View>
      </View>
      <View style={style.form_row_1}>
        <ButtonGreen
          name={"Realizar Cadastro"}
          action={() => navigation.navigate("Login")}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={style.has_account_link}>Já tem uma conta?</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
