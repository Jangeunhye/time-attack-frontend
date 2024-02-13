import axios from "axios";
import AuthAPI from "./auth/auth.api";
import CartAPI from "./cart/cart.api";
import ProductsAPI from "./products/products.api";

const coreClient = axios.create({
  baseURL: "https://port-0-express-server-17xco2nlsidlckv.sel5.cloudtype.app",
  withCredentials: true,
});

class API {
  static products = new ProductsAPI(coreClient);
  static auth = new AuthAPI(coreClient);
  static cart = new CartAPI(coreClient);
}

export default API;
