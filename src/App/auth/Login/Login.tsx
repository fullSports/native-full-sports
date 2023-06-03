import { View } from "react-native";
import {
  Button,
  Dialog,
  Paragraph,
  Provider,
  Portal,
} from "react-native-paper";
import React, { useState } from "react";
import { Text, TextInput } from "react-native";
import { LoginStyles as style } from "./Login-Styles";
import { GlobalColors } from "../../../shared/utils/styles/global-colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { validateEmptyParams } from "../../../shared/utils/functions/validate-inputs";
import { GlobalStyles as global } from "../../../../styles-global";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { regexEmail } from "../../../shared/utils/data/regex";

export default function Login({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [showPass, setShowPass] = useState<Boolean>(false);
  const [visible, setVisible] = React.useState(false);
  const [errorDesc, setErrorDesc] = React.useState("");
  const [errorTitle, setErrorTitle] = React.useState("");

  // const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  function validateInfo() {
    validateEmptyParams(senha);
    validateEmptyParams(email);
    if (!email.match(regexEmail)) {
      return (
        setVisible(true),
        setErrorTitle("E-mail inválido"),
        setErrorDesc("Endereço de e-mail incorreto. Insira um e-mail válido.")
      );
    }
  }
  return (
    // <Provider>
    <>
      {/* <Portal>
        <Dialog visible={visible} style={style.AlertStyle}>
          <Dialog.Title style={[style.AlertStyleText, style.AlertStyleTitle]}>
            {errorTitle}
          </Dialog.Title>
          <Dialog.Content>
            <Paragraph
              style={[style.AlertStyleText, style.AlertStyleParagraph]}
            >
              {errorDesc}
            </Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button textColor={GlobalColors.neon_green} onPress={hideDialog}>
              OK
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal> */}
      <View style={style.LoginView}>
        <View style={style.LoginFormView}>
          <Text style={style.HeaderTitle}>Efetue seu login na plataforma.</Text>
          <Text style={style.HeaderSubtitle}>
            Utilize as mesmas informações de cadastro para realizar o login.
          </Text>
          <View style={style.FormInputGroup}>
            <TextInput
              placeholderTextColor={GlobalColors.input_placeholder}
              style={global.form_input_text}
              value={email}
              placeholder="Insira seu e-mail"
              onChangeText={(email) => setEmail(email)}
            />
            <View style={style.input_with_btn}>
              <TextInput
                placeholderTextColor={GlobalColors.input_placeholder}
                style={[global.form_input_text, { borderWidth: 0 }]}
                value={senha}
                secureTextEntry={showPass ? false : true}
                placeholder="Insira sua senha"
                onChangeText={(pass) => setSenha(pass)}
              />
              <TouchableOpacity
                style={style.input_btn}
                onPress={() => setShowPass(!showPass)}
              >
                <Icon name={showPass ? "eye" : "eye-off"} size={18} />
              </TouchableOpacity>
            </View>

            <Button
              onPress={validateInfo}
              icon="login"
              style={[
                style.LoginButton,
                !email || !senha ? style.DisabledButton : style.EnabledButton,
              ]}
              textColor={GlobalColors.white}
              disabled={!email || !senha}
            >
              Entrar
            </Button>
          </View>
        </View>
        <View style={style.LoginViewBottom}>
          <Text style={style.BottomTxtOption}>Não possui cadastro?</Text>
          <TouchableOpacity>
            <Text
              onPress={() => navigation.navigate("CadastroUsuario")}
              style={style.TextLink}
            >
              Criar uma conta
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>

    // </Provider>
  );
}
