// "use client";

import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { useAppSelector } from "@/redux/hooks";

const NavCart = () => {
  const { cartQuantity } = useAppSelector((state) => state.cart);
  return (
    <div className="w-16 px-8 hidden md:block">
      <Link href="/cart">
        <div className="relative">
          <FiShoppingBag className="text-xl text-center font-thin text-blue-800 " />
          <div className="absolute bottom-3 w-[17px] h-[17px] text-center bg-red-500 rounded-[50%] left-3 text-sm font-medium text-gray-700">
            {cartQuantity}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NavCart;
