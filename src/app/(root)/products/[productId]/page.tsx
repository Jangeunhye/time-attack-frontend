"use client";
import API from "@/api/index.api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

function ProductDetailPage(props: { params: { productId: string } }) {
  const productId = props.params.productId;

  const returnValueOfUseQuery = useQuery({
    queryKey: ["products", { isList: true, id: productId }],
    queryFn: () => API.products.getProduct(productId),
  });
  const { data, isLoading } = returnValueOfUseQuery;
  const product = data?.result;
  return (
    product && (
      <div className="flex">
        <div className="relative w-[201.5px] h-[268.66px]">
          <Image
            src={product?.imgSrc}
            alt="상품사진"
            fill
            sizes="100%"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col">
          <Link href="/brands">
            <h2>{`${product.brand.nameKr}/${product.brand.nameEn}`}</h2>
          </Link>
          <hr />
          <h1>{product.name}</h1>
          <div>
            <div>
              <div>정가</div>
              <div>{product.originalPrice}</div>
            </div>
            <div>
              <div>판매가</div>
              <div>{product.price}</div>
            </div>
            <div>
              <div>배송</div>
              <div>{product.deliveryType}</div>
            </div>
            <div>
              <div>잔여 재고</div>
              <div>{product.onlineStock}</div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default ProductDetailPage;
