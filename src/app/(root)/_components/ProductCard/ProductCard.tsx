import { Product } from "@/types/product.type";
import Image from "next/image";

function ProductCard({ product }: { product: Product }) {
  return (
    <div>
      <div className="aspect-[3/4] relative mb-4">
        <Image
          src={product.imgSrc}
          alt="상품사진"
          fill
          sizes="100%"
          className="object-cover"
        />
      </div>
      <div className="grid gap-y-2">
        <h4 className="text-sm font-bold">{product.brand.nameEn}</h4>
        <p>{product.name}</p>
        <div>
          <span>{product.originalPrice}</span>
          <span>{product.price}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
