import { Product } from "@/types/Product.type";

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
