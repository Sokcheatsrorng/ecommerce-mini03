import React from "react";
import Image from "next/image";
import { ProductDetail } from "@/lib/definitions";

const ProductDetailComponent = ({
  id,
  title,
  image,
  desc,
  price,
}: ProductDetail) => {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 container-sm mx-[20px] sm:mx-[50px] md:mx-[80px] lg:mx-[150px] my-12">
      <div className="lg:w-[50%]">
        <Image
          width={700}
          height={700}
          src={image}
          className="rounded-xl object-cover "
          alt={title}
        />
      </div>

      <div className="flex flex-col justify-center w-2/3">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          {title}
        </h1>
        <p className="text-base md:text-lg lg:text-xl mb-6">{desc}</p>
        <div className="flex items-center mb-6">
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-red-600 dark:text-white mr-4">
            ${price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailComponent;
