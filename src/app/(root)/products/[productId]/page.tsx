"use client";
import API from "@/api/index.api";
import Page from "@/components/Page";
import { useQuery } from "@tanstack/react-query";
import DetailProduct from "../../_components/DetailProduct";

function ProductDetailPage(props: { params: { productId: string } }) {
  const productId = props.params.productId;

  const returnValueOfUseQuery = useQuery({
    queryKey: ["products", { isList: true, id: productId }],
    queryFn: () => API.products.getProduct(productId),
  });
  const { data, isLoading } = returnValueOfUseQuery;
  const product = data?.result;
  return <Page>{product && <DetailProduct product={product} />}</Page>;
}

export default ProductDetailPage;
