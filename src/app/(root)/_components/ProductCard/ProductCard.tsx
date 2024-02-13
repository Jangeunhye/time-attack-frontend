import { Product } from "@/types/product.type";
import Image from "next/image";

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="">
      <div className="aspect-[3/4] relative mb-4 ">
        <Image
          src={product.imgSrc}
          alt="상품사진"
          fill
          sizes="100%"
          className="object-cover hover:scale-105 transition-transform"
        />
      </div>
      <div className="grid gap-y-2">
        <h4 className="text-sm font-bold">{product.brand.nameEn}</h4>
        <p>{product.name}</p>
        <div className="text-sm flex flex-col sm:flex-row items-baseline gap-1.5">
          <span className="text-red-500 line-through font-semibold">
            ₩{product.originalPrice}
          </span>
          <span className="font-bold">₩{product.price}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
