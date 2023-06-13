import SyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons as Icon, Entypo, Feather } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";
import { OrderCardStyles as style } from "./styles-order-cards";
import { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GlobalStyles as global } from "../../../../../styles-global";
import { ButtonWhite } from "../../Buttons/Default-Buttons";
import { IPedidos } from "../../../utils/models/interface-pedidos";
import fullsports_api from "../../../../environment/full-sports-api";
import IPedido from "../../../utils/interfaces/IPedido";
import { IconButton } from "react-native-paper";
import { GlobalColors } from "../../../utils/styles/global-colors";
import { CustomSpinner } from "../../Spinner/custom-spinner";
const imgIlustrativa = require("../../../../App/assets/illustrations/teste_product_card.png");
interface PedidoCliente {
  pedido: IPedido
}
// comp: IPedidos
export const PedidosCliente = ({ pedido }: PedidoCliente, { navegaation }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [listaPedidos, setListaPedidos] = useState<IPedidos[]>([]);
  const [spinner, setSpinner] = useState(false);
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [complemento, setComplemento] = useState('');
  const [numero, setNumero] = useState('');
  const [spinnerPedido, setSpinnerPedido] = useState(false);
  const obj = Object.keys(pedido.produto.categoriaProduto)[0] as
    | 'roupa'
    | 'equipamento'
    | 'suplemento';
  useEffect(() => {
    const enderecoSplit = pedido.cliente.endereco.split('-');
    setComplemento(enderecoSplit[1]);
    setEstado(enderecoSplit[2].split(",")[0].trim());
    setCidade(enderecoSplit[2].split(",")[1].trim());
    setBairro(enderecoSplit[2].split(",")[2].trim());
    setRua(enderecoSplit[0].split(',')[0])
    const numeroSlit = enderecoSplit[0].split(',');
    setNumero(numeroSlit[numeroSlit.length - 1]);
  }, []);
  const cancelarPedido = async () => {
    console.log("Cancelaar")
    setSpinnerPedido(true);
    const token = await SyncStorage.getItem("access_token");
    return fullsports_api
      .delete(`deletar-pedido/${pedido._id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(() => {
        setSpinnerPedido(false);
        alert('Pedido cancelado com sucesso');
        return navegaation.navigate("Home")
      })
      .catch((err) => {
        console.log(err);
        setSpinnerPedido(false);
      });
  }
  return (
    <>
      <View
        style={[
          style.card_container,
          expanded
            ? { height: "auto", paddingVertical: 20 }
            : { height: 130 },
        ]}
      >
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={() => setExpanded(!expanded)}
        >
          <Image source={{ uri: `${pedido.produto.categoriaProduto[obj].imagemProduto[0].url}` }} style={style.card_product_photo} />
          <View style={style.carD_details_txt} >
            <Text style={global.card_product_name}>
              {pedido.produto.categoriaProduto[obj].nome}
            </Text>
            <Text style={global.card_info_txt}> {pedido.produto.categoriaProduto[obj].sexo},  {pedido.produto.categoriaProduto[obj].tamanho}, {pedido.quantidadePedido}x</Text>
            <Text style={global.card_info_txt}>Realizada {new Date(pedido.dataCadastro).toLocaleString()}</Text>
            <Text style={global.card_product_price}>R$ {pedido.produto.categoriaProduto[obj].preco}</Text>
          </View>
          <View style={style.card_arrow}>
            <Icon name={expanded ? "chevron-up" : "chevron-down"} size={20} />
          </View>
        </TouchableOpacity>

        <View style={expanded ? style.card_expanded_detailhes : style.visible}>
          <View style={style.card_expanded_txt_container}>
            <View style={style.card_expanded_detailhes_col}>
              <Feather name="user" size={20} color={GlobalColors.dark_green} />
              <View>
                <Text style={global.card_info_txt}>
                  {pedido.cliente.nome}
                </Text>
                <Text style={global.card_info_txt}>{`${pedido.cliente.cpf.charAt(0)}${pedido.cliente.cpf.charAt(
                  1
                )}${pedido.cliente.cpf.charAt(2)}. *** . *** -${pedido.cliente.cpf.charAt(
                  12
                )}${pedido.cliente.cpf.charAt(13)}`}</Text>
                {/* <Text style={global.card_info_txt}>Crédito, final 398</Text> */}
              </View>
            </View>
            <View style={style.card_expanded_detailhes_col}>
              <Entypo name="location-pin" size={20} color={GlobalColors.dark_green} />
              <View >
                <Text style={global.card_info_txt}>
                  {rua}, {numero}
                </Text>
                <Text style={global.card_info_txt}>{cidade}, {estado}</Text>
                <Text style={global.card_info_txt}>{pedido.cliente.cep}</Text>
              </View>
            </View>
          </View>
          <View style={style.card_expanded_status_btn_container}>
            {/* <View style={style.card_expanded_status}>
            <Icon name="clock-outline" size={20} />
            <Text style={style.card_expanded_status_txt}>
              Aguardando Pagamento
            </Text>
          </View> */}
            {!spinnerPedido ?
              (<TouchableOpacity >
                <ButtonWhite
                  width={330}
                  name="Cancelar pedido"
                  action={() => cancelarPedido()}
                />
              </TouchableOpacity>) : (<>
                <CustomSpinner />
              </>)
            }
          </View>
        </View>
      </View>
    </>
  );
};
