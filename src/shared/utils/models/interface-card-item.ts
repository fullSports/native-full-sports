export interface IProductCard {
  name: string;
  precoAnterior?: number;
  precoAtual: number;
  parcelamento: string;
  imgProduto?: any;
  linkTo?: string;
}

export interface ICartCard {
  productName: string;
  productPrice: number;
  qtdProduct: number;
  sizeProduct?: string;
}
