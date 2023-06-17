import ICliente from "./ICliente";
import IProduto from "./IProduto";

export default interface IPedido {
  _id: string;
  quantidadePedido: number;
  produto: IProduto;
  cliente: ICliente;
  total: number;
  dataCadastro: string;
}

// export default interface ICarrinho {
//   quantidadePedido: number;
//   produto: IProduto;
//   clienteID: string;
// }
