"use client";

import { Card } from "flowbite-react";
import { CartProductType, TSponser } from "@/lib/definitions";
import { useAppDispatch } from "@/redux/hooks";
import Image from "next/image";



export default function SponserCardComponent({
  name,
  image,
}: TSponser) {

  return (
    <Card
      className="max-w-sm cursor-pointer "
      renderImage={() => (
        <Image
          width={400}
          height={400}
          src={image}
          alt={"product-image"}
          className="h-[250px] rounded-md object-cover"
        />
      )}
    >
      <h2 className="line-clamp-1 text-xl font-semibold text-gray-900 dark:text-white">
        {name}
      </h2>
    </Card>
  );
}
