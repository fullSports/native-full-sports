import axios from "axios";

const fullsports_api = axios.create({
  baseURL: "https://back-end-full-sports.vercel.app/",
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
});

fullsports_api.defaults.headers["Access-Control-Allow-Origin"] = "*";
export default fullsports_api;
