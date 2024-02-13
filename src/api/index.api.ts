import axios from "axios";
import ProductsAPI from "./products/products.api";

const coreClient = axios.create({
  baseURL: "https://port-0-express-server-17xco2nlsidlckv.sel5.cloudtype.app",
  withCredentials: true,
});

class API {
  static products = new ProductsAPI(coreClient);
}

export default API;
