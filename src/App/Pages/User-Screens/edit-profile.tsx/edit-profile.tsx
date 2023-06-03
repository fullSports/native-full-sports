import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { Image, Text, View, TextInput } from "react-native";
import { AccessibilityBar } from "../../../../shared/components/Header/Header";
import { EditProfileStyles as style } from "./edit-profile-styles";
import { GlobalStyles as global } from "../../../../../styles-global";
import { CadastroUsuarioStyles as formStyle } from "../../../auth/Cadastro/Cadastro-styles";
import { GlobalColors } from "../../../../shared/utils/styles/global-colors";
import { ButtonGreen } from "../../../../shared/components/Buttons/default-Buttons";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from "react-native-paper";
import SyncStorage from "@react-native-async-storage/async-storage";
const pfp = require("./../../../assets/illustrations/testE_pfp.png");

export const EditUserProfile = ({ navigation }) => {
  return (
    <ScrollView>
      <AccessibilityBar />
      <View style={[style.header_user_profile, global.screenContainer]}>
        <Image source={pfp} style={style.user_pfp} />
        <View>
          <View style={style.user_info_row}>
            <Icon name="pencil-box-outline" style={style.user_porfile_icon} />
            <Text style={style.header_title}>Editar informações do perfil</Text>
          </View>
          <View>
            <View style={style.user_info_row}>
              <Text style={style.header_user_name}>
                Mariana dos Santos Oliveira
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={global.screenContainer}>
        <View style={formStyle.form_row_1}>
          <View style={formStyle.form_item_row}>
            <Text style={formStyle.form_label}>Nome</Text>
            <TextInput
              placeholderTextColor={GlobalColors.input_placeholder}
              placeholder="Informe seu nome completo"
              style={global.form_input_text}
            />
          </View>
        </View>
        <View style={formStyle.form_row_2}>
          <View style={formStyle.form_item_row_2}>
            <Text style={formStyle.form_label}>CPF (somente números)</Text>
            <TextInput
              placeholderTextColor={GlobalColors.input_placeholder}
              placeholder="00.000.000-00"
              style={global.form_input_text}
            />
          </View>
          <View style={formStyle.form_item_row_2}>
            <Text style={formStyle.form_label}>Data de nascimento</Text>
            <TextInput
              placeholderTextColor={GlobalColors.input_placeholder}
              placeholder="dd/mm/aaaa"
              style={global.form_input_text}
            />
          </View>
        </View>
        <View style={formStyle.form_row_2}>
          <View style={formStyle.form_item_row_2}>
            <Text style={formStyle.form_label}>CEP (somente números)</Text>
            <TextInput
              placeholderTextColor={GlobalColors.input_placeholder}
              placeholder="00000-000"
              style={global.form_input_text}
            />
          </View>
          <View style={formStyle.form_item_row_2}>
            <Text style={formStyle.form_label}>Rua</Text>
            <TextInput
              placeholderTextColor={GlobalColors.input_placeholder}
              placeholder="Ex.: Rua Alegria"
              style={global.form_input_text}
            />
          </View>
        </View>
        <View style={formStyle.form_row_2}>
          <View style={formStyle.form_item_row_2}>
            <Text style={formStyle.form_label}>Bairro</Text>
            <TextInput
              placeholderTextColor={GlobalColors.input_placeholder}
              placeholder="Ex.: Bairro Felicidade"
              style={global.form_input_text}
            />
          </View>
          <View style={formStyle.form_item_row_2}>
            <Text style={formStyle.form_label}>Estado</Text>
            <TextInput
              placeholderTextColor={GlobalColors.input_placeholder}
              placeholder="Ex.: SP"
              style={global.form_input_text}
            />
          </View>
        </View>
        <View style={formStyle.form_row_2}>
          <View style={formStyle.form_item_row_2}>
            <Text style={formStyle.form_label}>Cidade</Text>
            <TextInput
              placeholderTextColor={GlobalColors.input_placeholder}
              placeholder="Ex.: São Paulo"
              style={global.form_input_text}
            />
          </View>
          <View style={formStyle.form_item_row_2}>
            <Text style={formStyle.form_label}>Número</Text>
            <TextInput
              placeholderTextColor={GlobalColors.input_placeholder}
              placeholder="Ex.: 190"
              style={global.form_input_text}
            />
          </View>
        </View>
        <View style={formStyle.form_row_1}>
          <View style={formStyle.form_item_row}>
            <Text style={formStyle.form_label}>E-mail</Text>
            <TextInput
              placeholderTextColor={GlobalColors.input_placeholder}
              placeholder="E-mail de contato"
              style={global.form_input_text}
            />
          </View>
        </View>
        <View style={formStyle.form_row_1}>
          <View style={formStyle.form_item_row}>
            <Text style={formStyle.form_label}>Senha</Text>
            <TextInput
              placeholderTextColor={GlobalColors.input_placeholder}
              placeholder="Sua senha"
              style={global.form_input_text}
            />
          </View>
        </View>
        <View style={formStyle.form_row_1}>
          <ButtonGreen
            width={370}
            name={"salvar alterações"}
            action={() => navigation.navigate("Home")}
          />
        </View>
      </View>
    </ScrollView>
  );
};
