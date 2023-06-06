import axios from "axios";
import SyncStorage from "@react-native-async-storage/async-storage";
//https://back-end-full-sports.vercel.app/
//http://172.19.200.209:5000/

const fullsports_api = axios.create({
  baseURL: "http://172.19.200.209:5000/",
  headers: {
    "content-type": "application/json;charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  },
});

fullsports_api.defaults.headers["Access-Control-Allow-Origin"] = "*";
export default fullsports_api;
