export interface IProductCard {
  src?: string;
  produtoName: string;
  PrecoAnterior?: string;
  PrecoAtual?: string;
  produtoId?: string;
  precoParcelado?: string;
  tamanho?: number;
  obj?: "calcado" | "suplemento" | "roupa" | "equipamento";
  linkTo?: string;
}

export interface ICartCard {
  productName: string;
  productPrice: number;
  qtdProduct: number;
  sizeProduct?: string;
}
