import API from "@/api/index.api";
import { CartItem } from "@/types/Cart.type";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

function CartItems() {
  const returnValueOfUseQuery = useQuery({
    queryKey: ["cart", { isList: true, type: "cart" }],
    queryFn: API.cart.getCart,
  });
  const { data } = returnValueOfUseQuery;
  const cart = data?.result.items;
  console.log(cart);
  return (
    <section>
      <h2>장바구니</h2>
      {cart &&
        cart.map((item: CartItem) => (
          <li key={item.id}>
            <div className="relative w-[50px] h-[70px]">
              <Image
                src={item.product.imgSrc}
                alt="상품사진"
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
              <h2>{item.product.name}</h2>
            </div>
          </li>
        ))}
    </section>
  );
}
export default CartItems;
