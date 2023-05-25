import { View } from "react-native";
import {
  TextInput,
  Button,
  Dialog,
  Paragraph,
  Provider,
  Portal,
} from "react-native-paper";
import React from "react";
import { Text } from "react-native";
import { LoginStyles } from "./Login-Styles";
import { GlobalColors } from "../../../shared/utils/styles/global-colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { validateEmptyParams } from "../../../shared/utils/functions/validate-inputs";

export default function Login({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [visible, setVisible] = React.useState(false);
  const [errorDesc, setErrorDesc] = React.useState("");
  const [errorTitle, setErrorTitle] = React.useState("");

  // const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  function validateInfo() {
    validateEmptyParams(password);
    validateEmptyParams(email);
    if (!email.match(regex)) {
      return (
        setVisible(true),
        setErrorTitle("E-mail inválido"),
        setErrorDesc("Endereço de e-mail incorreto. Insira um e-mail válido.")
      );
    }
  }
  return (
    <Provider>
      <Portal>
        <Dialog visible={visible} style={LoginStyles.AlertStyle}>
          <Dialog.Title
            style={[LoginStyles.AlertStyleText, LoginStyles.AlertStyleTitle]}
          >
            {errorTitle}
          </Dialog.Title>
          <Dialog.Content>
            <Paragraph
              style={[
                LoginStyles.AlertStyleText,
                LoginStyles.AlertStyleParagraph,
              ]}
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
      </Portal>
      <View style={LoginStyles.LoginView}>
        <View style={LoginStyles.LoginFormView}>
          <Text style={LoginStyles.HeaderTitle}>
            Efetue seu login na plataforma.
          </Text>
          <Text style={LoginStyles.HeaderSubtitle}>
            Utilize as mesmas informações de cadastro para realizar o login.
          </Text>
          <View style={LoginStyles.FormInputGroup}>
            <TextInput
              activeOutlineColor={GlobalColors.neon_green}
              activeUnderlineColor={GlobalColors.neon_green}
              style={LoginStyles.LoginInputGroup}
              label="Informe seu e-mail"
              value={email}
              onChangeText={(email) => setEmail(email)}
            />
            <TextInput
              activeOutlineColor={GlobalColors.neon_green}
              activeUnderlineColor={GlobalColors.neon_green}
              style={LoginStyles.LoginInputGroup}
              label="Informe sua senha"
              value={password}
              onChangeText={(pass) => setPassword(pass)}
            />
            <Button
              onPress={validateInfo}
              icon="login"
              style={[
                LoginStyles.LoginButton,
                !email || !password
                  ? LoginStyles.DisabledButton
                  : LoginStyles.EnabledButton,
              ]}
              textColor={GlobalColors.white}
              disabled={!email || !password}
            >
              Entrar
            </Button>
          </View>
        </View>

        <View style={LoginStyles.LoginViewBottom}>
          <Text style={LoginStyles.BottomTxtOption}>Não possui cadastro?</Text>
          <TouchableOpacity>
            <Text
              onPress={() => navigation.navigate("CadastroUsuario")}
              style={LoginStyles.TextLink}
            >
              Criar uma conta
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Provider>
  );
}

//  onPress={() => navigation.navigate("Teste")}
