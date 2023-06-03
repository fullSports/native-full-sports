// import axios from "axios";

// const cep_api = axios.create({
//   baseURL: "https://brasilapi.com.br/api/cep/v1/",
// });

// cep_api.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
// export default cep_api;
import axios from 'axios';

const cep_ap_url = axios.create({
	baseURL: 'https://brasilapi.com.br/api/cep/v1/',
	headers: {
		'content-type': 'application/json;charset=utf-8',
	},
});
cep_ap_url.defaults.headers.post['Acess-Control-Allow-Origin'] = '*';
export default cep_ap_url;
