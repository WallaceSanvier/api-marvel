import axios from "axios";
import md5 from "md5";

const publicKey = "2518a00076314a34d990056e98d8230e";

const privateKey = "e51916825d46d661d6cc49937171da32ff2e92df";

const ts = Number(new Date());

const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
  baseURL: `https://gateway.marvel.com/v1/public`,
  params: {
    ts,
    apikey: publicKey,
    hash,
  },
});

export default api;
