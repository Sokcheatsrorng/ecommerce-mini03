'use client'

import { CartProductType, ProductType, TProduct } from "@/lib/definitions";
import { useAppDispatch } from "@/redux/hooks";
import { useGetProductByIdQuery } from "@/redux/service/product";
import { addToCart } from "@/redux/features/cart/cartSlice";
import Image from "next/image";


export type Params = {
  params: {
    id: number;
  };
};

export default function page({ params }: Params) {
  const id = params.id;
  const { data } = useGetProductByIdQuery(id);
  const product = data as TProduct;
  const dispatch = useAppDispatch();
  console.log(product);
  if (!product) {
    // Handle the case where product is undefined
    return <div>Loading...</div>;
  }
  const handleAddToCart = () => {
    // Dispatch the addToCart action with the product details
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      category: product.category,
      description:product.desc
    }));
  };


  return (

        <main className='w-full lg:w-[65%] md:w-[80%] mt-10  mx-auto flex items-center gap-12  lg:h-[600px] py-12'>
    <div className="lg:w-[50%]">
      <Image
          width={700}
          height={700}
          src={product.image}
          className='rounded-xl object-cover ' 
          alt={product.title}      />
    </div>

    <div className='flex flex-col justify-center w-2/3'>
      <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4'>{product.title}</h1>
      <p className='text-base md:text-lg lg:text-xl mb-6'>{product.desc}</p>
      <div className='flex items-center mb-6'>
        <p className='text-xl md:text-2xl lg:text-3xl font-semibold text-red-600 dark:text-white mr-4'>
          ${product.price}
        </p>
      </div>
      <button className='px-6 py-3 rounded-lg bg-blue-200
        text-blue-900  font-semibold 
        focus:outline-none focus:ring-2' onClick={handleAddToCart}>
          Add To Cart
        </button>
    </div>
  </main>
  );
}



