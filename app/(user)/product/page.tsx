import { Suspense } from "react";
import Loading from "@/app/loading";
import { CartProductType } from "@/lib/definitions";
import Link from "next/link";
import { Metadata } from "next";


async function fetchData() {
  const data = await fetch(`${process.env.DJANGO_API_URL}/products`)
  const res = await data.json()
  return res.products;
}

export const metadata: Metadata = {
  title: "Product Detail",
  description: "Welcome to Product Detail Page.",
  keywords: ['shop', 'ecommerce', 'sell']
};

export default async function Home() {
  const products = await fetchData()

  return (
    <>
      <div className="mt-10 flex justify-center flex-wrap gap-5 bg-red-900">
        <Suspense fallback={<Loading />}>
          {products.map((product: CartProductType) => {
            return (
              <Link href={`/product/${product.id}`} key={product.id}>
                {/* <CardProductDetailComponent name={product.name}
                image={product.image} price={product.price}
                id={product.id} category={product.category}                /> */}
              </Link>
            );
          })}
        </Suspense>
      </div>
    </>
  );
}
