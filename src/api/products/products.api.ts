import { AxiosInstance } from "axios";
import { ProductData, ProductsData } from "./products.response";

class ProductsAPI {
  private coreClient: AxiosInstance;

  constructor(coreClient: AxiosInstance) {
    this.coreClient = coreClient;
  }

  getProducts = async () => {
    const url = "/products";
    const response = await this.coreClient.get<ProductsData>(url);
    const data = response.data;
    return data;
  };

  getProduct = async (productId: string) => {
    const url = `/products/${productId}`;
    const response = await this.coreClient.get<ProductData>(url);
    const data = response.data;
    return data;
  };
}
export default ProductsAPI;
