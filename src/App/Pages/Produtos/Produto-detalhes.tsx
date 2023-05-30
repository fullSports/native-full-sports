import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import { DetalheStyles } from "./Produto-detalhes-styles";
import { useState } from "react";
import { GlobalStyles } from "../../../../styles-global";
import {
  ButtonGreen,
  ButtonWhite,
} from "../../../shared/components/Buttons/default-buttons";
import SelectDropdown from "react-native-select-dropdown";
import { GlobalColors } from "../../../shared/utils/styles/global-colors";

const imgIlustrativa = require("../../assets/illustrations/teste_product_card.png");

export const ProdutoDetalhes = (comp) => {
  const [numItems, setNumItems] = useState<number>(0);

  const cores = [{ cor: "rosa" }, { cor: "azul" }, { cor: "preto" }];
  const tamanho = [{ tamanho: "GG" }, { tamanho: "G" }, { tamanho: "M" }];

  return (
    <>
      <View style={DetalheStyles.product_card_container}>
        <Image source={imgIlustrativa} style={DetalheStyles.product_img_bg} />
        <View style={DetalheStyles.product_card_desc}>
          {/* <View style={DetalheStyles.product_card_row}>
            <View
              style={{
                flexDirection: "row",
                maxWidth: 10,
                margin: 0,
                gap: 0,
              }}
            >
              {Array(5)
                .fill(null)
                .map((_, idx) => (
                  <IconButton icon="star" key={idx} size={15} />
                ))}
            </View>
          </View> */}
          <View style={DetalheStyles.product_card_row}>
            <View>
              <Text style={DetalheStyles.product_card_title}>
                Camiseta esportiva masculina
              </Text>
            </View>
            <View>
              <Text style={DetalheStyles.product_card_price}>R$99,99</Text>
            </View>
          </View>
          <View style={DetalheStyles.product_card_row}>
            <View style={DetalheStyles.product_card_qtd_select}>
              {/* <ButtonGreen /> */}
              <TouchableOpacity
                style={DetalheStyles.qtd_select_btn}
                disabled={numItems == 0}
                onPress={() => setNumItems(numItems - 1)}
              >
                <Text>-</Text>
              </TouchableOpacity>
              <Text style={DetalheStyles.qtd_select_btn_txt}>{numItems}</Text>
              <TouchableOpacity
                style={DetalheStyles.qtd_select_btn}
                onPress={() => setNumItems(numItems + 1)}
              >
                <Text>+</Text>
              </TouchableOpacity>
            </View>
            <SelectDropdown
              defaultButtonText="Tamanho"
              data={tamanho}
              buttonStyle={DetalheStyles.qtd_select_input}
              buttonTextStyle={{
                fontSize: 14,
                textAlign: "left",
              }}
              buttonTextAfterSelection={(selected, idx) => {
                return selected.tamanho;
              }}
              rowTextForSelection={(selected, idx) => {
                return selected.tamanho;
              }}
              onSelect={(item, idx) => {
                return item.tamanho;
              }}
            />
            <SelectDropdown
              defaultButtonText="Cor"
              data={cores}
              buttonStyle={DetalheStyles.qtd_select_input}
              buttonTextStyle={{
                fontSize: 14,
                textAlign: "left",
              }}
              buttonTextAfterSelection={(selected, idx) => {
                return selected.cor;
              }}
              rowTextForSelection={(selected, idx) => {
                return selected.cor;
              }}
              onSelect={(item, idx) => {
                return item.cor;
              }}
            />
          </View>
          <View
            style={[
              DetalheStyles.product_card_row,
              { flexDirection: "column", justifyContent: "flex-start" },
            ]}
          >
            <Text style={DetalheStyles.product_card_desc_title}>
              Sobre este produto
            </Text>
            <Text style={DetalheStyles.product_card_desc_txt}>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic{" "}
            </Text>
          </View>
          <View style={[DetalheStyles.product_card_row, { marginVertical: 2 }]}>
            <ButtonGreen
              width={330}
              name="Comprar"
              action={() => console.log("comprar")}
            />
          </View>
          <View style={[DetalheStyles.product_card_row, { marginVertical: 2 }]}>
            <ButtonWhite
              width={330}
              name="Adicionar ao carrinho"
              action={() => console.log("carrinho")}
            />
          </View>
        </View>
      </View>
    </>
  );
};
