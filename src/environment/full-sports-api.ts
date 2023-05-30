import axios from "axios";

const fullsports_api = axios.create({
  baseURL: "https://back-end-full-sports.vercel.app/",
});

fullsports_api.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
export default fullsports_api;
