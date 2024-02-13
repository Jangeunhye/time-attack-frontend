"use client";

import API from "@/api/index.api";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import ProductCard from "../ProductCard";

function Trending() {
  const returnValueOfUseQuery = useQuery({
    queryKey: ["products", { isList: true, type: "trending" }],
    queryFn: API.products.getProducts,
  });
  const { data, isLoading } = returnValueOfUseQuery;
  const products = data?.result;

  return (
    <>
      <h2 className="font-bold text-3xl text-center my-12">Trending</h2>

      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-8 gap-y-12">
        {products &&
          products.map((product) => (
            <li key={product.id}>
              <Link href={`products/${product.id}`}>
                <ProductCard product={product} />
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}

export default Trending;
