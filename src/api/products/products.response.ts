import { Product } from "@/types/product.type";

export type ProductsData = {
  success: boolean;
  result: Product[];
  error: null;
};
export type ProductData = {
  success: boolean;
  result: Product;
  error: null;
};
