import { View, Text, Image, Button } from "react-native";
import { DetalheStyles } from "./Produto-detalhes-styles";
import { useState } from "react";
import { GlobalStyles } from "../../../../styles-global";

const imgIlustrativa = require("../../assets/illustrations/teste_product_card.png");

export const ProdutoDetalhes = (comp) => {
  const [numItems, setNumItems] = useState<number>(0);

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
              <button
                style={DetalheStyles.qtd_select_btn}
                disabled={numItems == 0}
                onClick={() => setNumItems(numItems - 1)}
              >
                -
              </button>
              <Text style={DetalheStyles.qtd_select_btn_txt}>{numItems}</Text>
              <button
                style={DetalheStyles.qtd_select_btn}
                onClick={() => setNumItems(numItems + 1)}
              >
                +
              </button>
            </View>
            <select style={DetalheStyles.qtd_select_input}>
              <option value="1" selected>
                Tamanho
              </option>
              <option value="2">1</option>
            </select>
            <select style={DetalheStyles.qtd_select_input}>
              <option value="1" selected>
                Cor
              </option>
              <option value="2">1</option>
            </select>
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
            <button style={DetalheStyles.product_card_buy_btn}>Comprar</button>
          </View>
          <View style={[DetalheStyles.product_card_row, { marginVertical: 2 }]}>
            <button style={GlobalStyles.btn_hole}>Adicionar no carrinho</button>
          </View>
        </View>
      </View>
    </>
  );
};
