export type Product = {
  id: string;
  name: string;
  imgSrc: string;
  onlineStock: number;
  price: number;
  originalPrice: number;
  deliveryType: string;
  brandId: number;
  brand: {
    id: number;
    nameKr: string;
    nameEn: string;
  };
};
