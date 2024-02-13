import { Product } from "@/types/product.type";
import Image from "next/image";
import Link from "next/link";
import AddCartButton from "../AddCartButton";

function DetailProduct({ product }: { product: Product }) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 px-20">
      <div className="relative aspect-[3/4]">
        <Image
          src={product?.imgSrc}
          alt="상품사진"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col py-8 ">
        <Link
          href="/brands"
          className="text-[15px] border-b pb-2.5 mb-2.5  font-bold"
        >
          <h2>{`${product.brand.nameKr}/${product.brand.nameEn}`}</h2>
        </Link>
        <h1 className="text-lg">{product.name}</h1>
        <div className="grid grid-cols-5 my-12 gap-y-5 text-[15px]">
          <div className="text-slate-900 font-bold">정가</div>
          <div className="col-span-4 line-through text-red-500">
            ₩{product.originalPrice}
          </div>

          <div className="text-slate-900 font-bold">판매가</div>
          <div className="col-span-4 font-semibold"> ₩{product.price}</div>

          <div className="text-slate-900 font-bold">배송</div>
          <div className="col-span-4">{product.deliveryType}</div>

          <div className="text-slate-900 font-bold">잔여 재고</div>
          <div className="col-span-4">{product.onlineStock}</div>
        </div>
        <AddCartButton product={product} />
      </div>
    </section>
  );
}

export default DetailProduct;
