import { View } from "react-native";
import { Button, Dialog, Paragraph, Portal } from "react-native-paper";
import React, { useState, useEffect } from "react";
import { Text, TextInput } from "react-native";
import { LoginStyles as style } from "./Login-Styles";
import { GlobalColors } from "../../../shared/utils/styles/global-colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { validateEmptyParams } from "../../../shared/utils/functions/validate-inputs";
import { GlobalStyles as global } from "../../../../styles-global";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { regexEmail } from "../../../shared/utils/data/regex";
import SyncStorage from "@react-native-async-storage/async-storage";
import fullsports_api from "../../../environment/full-sports-api";
import { AxiosError } from "axios";
export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [showPass, setShowPass] = useState<Boolean>(false);
  const [visible, setVisible] = useState(false);
  const [errorDesc, setErrorDesc] = useState("");
  const [errorTitle, setErrorTitle] = useState("");
  const [mensagemErroBolean, setMensagemErroBolean] = useState(false);
  const [menssagemErro, setMenssagemErro] = useState("");
  // const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  async function validateInfo() {
    validateEmptyParams(senha);
    validateEmptyParams(email);
    if (!email.match(regexEmail)) {
      return (
        setVisible(true),
        setErrorTitle("E-mail inválido"),
        setErrorDesc("Endereço de e-mail incorreto. Insira um e-mail válido.")
      );
    } else {
      setVisible(false), setErrorTitle(""), setErrorDesc("");
      const token = await SyncStorage.getItem("access_token");
      fullsports_api
        .post("realizar-login", {
          email: email,
          password: senha,
        }, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        })
        .then((res) => {
          console.log(res.data)
          if (
            res.data.emailAndPassword === false ||
            !res.data.emailExists
          ) {
            setMensagemErroBolean(true);
            setMenssagemErro(res.data.messagem);
          } else {
            setMensagemErroBolean(false);
            SyncStorage.setItem("user", JSON.stringify(res.data.result));
            return navigation.navigate("Home");
          }
        })
        .catch((err) => {
          console.log(err);
          setMensagemErroBolean(true);
          setMenssagemErro(Array.isArray(err.response.data.message) ? err.response.data.message[0].toString() : err.response.data.message);
        });
    }
  }
  return (
    <>
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
              onPressIn={() => {
                setMensagemErroBolean(false);
                setMenssagemErro("");
              }}
              onChangeText={(email) => setEmail(email)}
            />
            <View style={style.input_with_btn}>
              <TextInput
                placeholderTextColor={GlobalColors.input_placeholder}
                style={[global.form_input_text, { borderWidth: 0 }]}
                value={senha}
                onPressIn={() => {
                  setMensagemErroBolean(false);
                  setMenssagemErro("");
                }}
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
            {mensagemErroBolean ? (
              <Text style={{ color: "red" }}>{menssagemErro}</Text>
            ) : (
              <></>
            )}
            {visible ? (
              <>
                <Text style={{ color: "red" }}>{errorDesc || errorTitle}</Text>
              </>
            ) : (
              <></>
            )}

          </View>
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
  );
}
