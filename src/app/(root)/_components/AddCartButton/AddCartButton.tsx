"use client";

import API from "@/api/index.api";
import LogInModal from "@/components/LogInModal/LogInModal";
import { useAuth } from "@/contexts/auth.context";
import { removeProduct, updateProducts } from "@/redux/slices/cart.slices";
import { setModal } from "@/redux/slices/utils.slice";
import { useAppDispatch } from "@/redux/store";
import { Product } from "@/types/product.type";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

function AddCartButton({ product }: { product: Product }) {
  const { isLoggedIn } = useAuth();
  const dispatch = useAppDispatch();
  const { mutateAsync } = useMutation({ mutationFn: API.cart.addItemToCart });
  const [isInCart, setIsInCart] = useState(false);
  const handleAddItem = async () => {
    if (!isLoggedIn) {
      const action = setModal(<LogInModal />);
      dispatch(action);
    }
    const response = await mutateAsync(product);
    dispatch(updateProducts({ product: product }));
    setIsInCart(true);
  };

  const handleRemoveItem = async () => {
    if (!isLoggedIn) {
      const action = setModal(<LogInModal />);
      dispatch(action);
    }
    dispatch(removeProduct(product.id));
    setIsInCart(false);
  };

  return (
    <>
      {isInCart ? (
        <button
          onClick={handleRemoveItem}
          className=" border border-slate-700 py-4 px-12 text-[15px] font-semibold transition hover:-translate-y-1 active:translate-y-0 hover:drop-shadow w-full bg-black text-white"
        >
          장바구니에서 빼기
        </button>
      ) : (
        <button
          onClick={handleAddItem}
          className=" border border-slate-700 py-4 px-12 text-[15px] font-semibold transition hover:-translate-y-1 active:translate-y-0 hover:drop-shadow w-full bg-black text-white"
        >
          장바구니에 담기
        </button>
      )}
    </>
  );
}

export default AddCartButton;
