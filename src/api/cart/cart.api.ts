import { Product } from "@/types/Product.type";
import { AxiosInstance } from "axios";

class CartAPI {
  private coreClient: AxiosInstance;
  constructor(coreClient: AxiosInstance) {
    this.coreClient = coreClient;
  }
  getCart = async () => {
    const url = "/cart";
    const response = await this.coreClient.get(url);
    const data = response.data;
    return data;
  };
  addItemToCart = async (product: Product) => {
    const url = `/cart/products/${product.id}`;
    const response = await this.coreClient.post(url);
    const data = response.data;
    return data;
  };
  removeItemFromCart = async (productId: string) => {
    const url = `/cart/products/${productId}`;
    const response = await this.coreClient.delete(url);
    const data = response.data;
    return data;
  };
  clearItemInCart = async (productId: string) => {
    const url = `/cart/products/${productId}/clear`;
    const response = await this.coreClient.delete(url);
    const data = response.data;
    return data;
  };
}

export default CartAPI;
