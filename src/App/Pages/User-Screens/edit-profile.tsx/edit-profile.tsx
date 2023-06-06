import React, { useState, useEffect } from "react";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { Image, Text, View, TextInput, TouchableOpacity } from "react-native";
import { AccessibilityBar } from "../../../../shared/components/Header/Header";
import { EditProfileStyles as style } from "./edit-profile-styles";
import { GlobalStyles as global } from "../../../../../styles-global";
import { CadastroUsuarioStyles as formStyle } from "../../../auth/Cadastro/Cadastro-styles";
import { GlobalColors } from "../../../../shared/utils/styles/global-colors";
import { ButtonGreen } from "../../../../shared/components/Buttons/Default-Buttons";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from "react-native-paper";
import SyncStorage from "@react-native-async-storage/async-storage";
import ICliente from "../../../../shared/utils/interfaces/ICliente";
import fullsports_api from "../../../../environment/full-sports-api";
import cep_ap_url from "../../../../environment/cep-api";
import { cpfMask } from "../../../../shared/utils/functions/masks";
import { MaskedTextInput } from "react-native-mask-text";
import { isNumeric, validateInputs } from "../../../../shared/utils/functions/validate-inputs";
const pfp = require("./../../../assets/illustrations/testE_pfp.png");

export const EditUserProfile = ({ navigation }) => {
  const [user, setUser] = useState<ICliente>();
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [sexo, setSexo] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [complemento, setComplemento] = useState('');
  const [numero, setNumero] = useState('');
  const [file, setImagem] = useState<File | null>(null);
  const [spinner, setSpinner] = useState(false);
  const [imagemId, setImagemID] = useState('');
  const [imagemPerfilurl, setImagemPerfilurl] = useState('');
  const [mensagemErroBolean, setMensagemErroBolean] = useState(false);
  const [menssagemErro, setMenssagemErro] = useState('');
  const [cadastrarNovaFoto, setCadastrarNovaFoto] = useState(false);
  const [carregandoCep, setCarregandoCep] = useState(false);
  const [carregandoCepMenssagem, setCarregandoCepMessagem] = useState(false);
  useEffect(() => {
    SyncStorage.getItem("user").then(res => {
      if (res !== null) {
        setUser(JSON.parse(res))
      }
    })
  }, []);
  useEffect(() => {
    if (user) {
      fullsports_api
        .get<ICliente>(`listar-cliente/${user._id}`)
        .then((resposta) => {
          console.log(resposta.data)
          setCpf(resposta.data.cpf);
          setNome(resposta.data.nome);
          setDataNascimento(resposta.data.dataNascimento);
          setSexo(resposta.data.sexo);
          setCep(resposta.data.cep);
          const enderecoSplit = resposta.data.endereco.split('-');
          setComplemento(enderecoSplit[1]);
          setEstado(enderecoSplit[2].split(",")[0]);
          setCidade(enderecoSplit[2].split(",")[1]);
          setBairro(enderecoSplit[2].split(",")[2]);
          setRua(enderecoSplit[0].split(',')[0])
          const numeroSlit = enderecoSplit[0].split(',');
          setNumero(numeroSlit[numeroSlit.length - 1]);
          if (!resposta.data.imagemPerfil) {
            setImagemID('');
            setImagemPerfilurl('');
          } else {
            setImagemID(resposta.data.imagemPerfil._id);
            setImagemPerfilurl(resposta.data.imagemPerfil.url);
          }
        })
        .catch((err) => {
          console.log(err);
          setMensagemErroBolean(true);
          setMenssagemErro('Erro na requisição');
        });
    }
  }, [user]);

  const buscaCep = () => {
    setCarregandoCep(false);
    setCarregandoCepMessagem(false);
    if (cep === '') {
      setCarregandoCep(false);
      setRua('');
      setBairro('');
      setEstado('');
      setCidade('');
    } else {
      console.log(cep)
      cep_ap_url.request({
        method: 'GET',
        url: cep,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
        .then((evento) => {
          setCarregandoCep(false);
          setRua(evento.data.street.split('-')[0]);
          setBairro(evento.data.neighborhood);
          setEstado(evento.data.state);
          setCidade(evento.data.city);
        })
        .catch((err) => {
          setCarregandoCep(false);
          setCarregandoCepMessagem(true);
          console.log(err);
        });
    }
  }

  const atualizarCliente = () => {
    console.log("TRESTE")
    setCarregandoCepMessagem(false)
    setMensagemErroBolean(false)
    if (
      validateInputs(nome) ||
      validateInputs(dataNascimento) ||
      validateInputs(cpf) ||
      validateInputs(cep) ||
      validateInputs(rua) ||
      validateInputs(bairro) ||
      validateInputs(estado) ||
      validateInputs(cidade) ||
      validateInputs(numero) ||
      validateInputs(complemento)
    ) {
      setCarregandoCepMessagem(false);
      if (user) {
        fullsports_api
          .put(`atualizar-cliente/${user._id}`, {
            cpf,
            nome,
            dataNascimento,
            sexo,
            cep,
            endereco: `${rua},${numero} -${complemento}- ${estado}, ${cidade}, ${bairro}`,
            imagemPerfil: imagemId,
          })
          .then((res) => {
            setSpinner(false);
            console.log(res.data)
            // alert("cliente atualizado com suceeso");
            return navigation.navigate("Home")
          })
          .catch((err) => {
            setCarregandoCep(false);
            setCarregandoCepMessagem(true);
            console.log(err);
          });
      } else setMensagemErroBolean(true)
    };
  }
  return (
    <ScrollView>
      <AccessibilityBar />
      <View style={[style.header_user_profile, global.screenContainer]}>
        <Image source={{ uri: imagemPerfilurl }} style={style.user_pfp} />
        <View>
          <View style={style.user_info_row}>
            <Icon name="pencil-box-outline" style={style.user_porfile_icon} />
            <Text style={style.header_title}>Editar informações do perfil</Text>
          </View>
          <View>
            <View style={style.user_info_row}>
              <Text style={style.header_user_name}>
                {nome}
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
              value={nome}
              onChangeText={(t) => setNome(t)}
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
              value={cpf}
              keyboardType="numeric"
              onChangeText={async (t) => setCpf(await cpfMask(t))}
            />
          </View>
          <View style={formStyle.form_item_row_2}>
            <Text style={formStyle.form_label}>Data de nascimento</Text>
            <MaskedTextInput
              mask="99/99/9999"
              value={dataNascimento}
              onChangeText={(e) => {
                setDataNascimento(e);
              }}
              placeholderTextColor={GlobalColors.input_placeholder}
              placeholder="dd/mm/aaaa"
              style={global.form_input_text}
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={formStyle.form_row_2}>
          <View style={formStyle.form_item_row_2}>
            <Text style={formStyle.form_label}>CEP (somente números)</Text>
            <MaskedTextInput
              mask="99999-999"
              value={cep}
              onChangeText={(e) => {
                setCep(e);
              }}
              maxLength={9}
              placeholderTextColor={GlobalColors.input_placeholder}
              placeholder="00000-000"
              keyboardType="numeric"
              onBlur={() => buscaCep()}
              style={global.form_input_text}
            />
            <Text style={{ color: "red" }}>{!carregandoCepMenssagem ? "" : "cep não encontrado"}</Text>
          </View>
          <View style={formStyle.form_item_row_2}>
            <Text style={formStyle.form_label}>Rua</Text>
            <TextInput
              placeholderTextColor={GlobalColors.input_placeholder}
              placeholder="Ex.: Rua Alegria"
              style={global.form_input_text}
              value={rua}
              onChangeText={(t) => setRua(t)}
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
              value={bairro}
              onChangeText={(t) => setBairro(t)}
            />
          </View>
          <View style={formStyle.form_item_row_2}>
            <Text style={formStyle.form_label}>Estado</Text>
            <TextInput
              placeholderTextColor={GlobalColors.input_placeholder}
              placeholder="Ex.: SP"
              style={global.form_input_text}
              value={estado}
              onChangeText={(t) => setEstado(t)}
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
              value={cidade}
              onChangeText={(t) => setCidade(t)}
            />
          </View>
          <View style={formStyle.form_item_row_2}>
            <Text style={formStyle.form_label}>Número</Text>
            <TextInput
              placeholderTextColor={GlobalColors.input_placeholder}
              placeholder="Ex.: 190"
              style={global.form_input_text}
              value={numero}
              keyboardType="numeric"
              onChangeText={(t) => setNumero(t)}
            />
          </View>
        </View>
        {/* <View style={formStyle.form_row_1}>
          <View style={formStyle.form_item_row}>
            <Text style={formStyle.form_label}>E-mail</Text>
            <TextInput
              placeholderTextColor={GlobalColors.input_placeholder}
              placeholder="E-mail de contato"
              style={global.form_input_text}
              value={email}
              onChangeText={(t) => setNome(t)}
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
        </View> */}
        <View style={formStyle.form_row_1}>
          <TouchableOpacity onPress={() => atualizarCliente()}>
            <ButtonGreen
              width={370}
              name={"salvar alterações"}
              action={() => console.log("ETSTe")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
