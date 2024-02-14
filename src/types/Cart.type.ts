import { Product } from "./Product.type";

export type CartItem = {
  cartId: number;
  cratedAt: string;
  id: number;
  product: Product;
  productId: number;
  quantity: number;
  updateAt: string;
};
