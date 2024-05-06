"use client";

import Image from "next/image";
import { useGetProductsQuery } from "@/redux/service/product";
import MyComponent from "./(user)/aos/MyComponent";
import { CartProductType, TSponser } from "@/lib/definitions";
import Loading from "./loading";
import Error from "./error";
import { CardBody, CardFooter } from "@nextui-org/react";
import { Pagination, Button, Card } from "@nextui-org/react";
import React from "react";
import Marquee from "react-fast-marquee";
import HeroSectionComponent from "@/components/hero/HeroSectionComponent";
import { sponsermenu } from "@/components/sponser/sponser-menu";
import SponserCardComponent from "@/components/sponser/SponserComponent";
import image from "next/image";
import Link from "next/link";

export default function Home() {
  // get Product data
  const [currentPage, setCurrentPage] = React.useState(1);

  const { data, error, isLoading } = useGetProductsQuery({
    page: currentPage,
    pageSize: 6,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div>
        <Error
          error={undefined}
          reset={() => console.log("Function not implemented.")}
        />
      </div>
    );
  }

  if (!data) return <div>No data available</div>;
  // Convert object data into an array
  const products: CartProductType[] = Object.values(data.results);

  console.log(products);

  return (
    <>
      <HeroSectionComponent />
      <h1 className="text-center mt-4  text-2xl">POPULAR PRODUCTS</h1>
      <MyComponent />
      <div className="md:w-[80%] mx-auto w-full">
        <h2 className="text-center mt-10 text-2xl">OUR SPONSERS</h2>
        <Marquee speed={200}>
          {sponsermenu.map((item) => (
            <>
              <Image
                width={400}
                height={400}
                src={item.image}
                alt={"product-image"}
                className="h-[250px] rounded-md object-contain"
              />
            </>
          ))}
        </Marquee>
        <h3 className="text-center mt-10 text-2xl ">OUR PRODUCTS</h3>
        <div className="mt-8 gap-5 md:w-full mx-auto">
          <div className="mx-auto grid lg:grid-cols-3 gap-4 md:grid-cols-2 justify-center w-full mt-8 p-6">
            {products.map((item: CartProductType, index) => {
              return (
                <Link href={`/product/${item.id}`} key={item.id}>
                  <Card
                    className="h-[370px] border-1 shadow-none"
                    key={index}
                    isPressable
                    onPress={() => console.log("item pressed")}
                  >
                    <CardBody className="overflow-visible p-0 w-full h-[300px]">
                      <Image
                       width={500}
                       height={400}
                        style={{ width: "500px", height: "400px" }} 
                        className="object-contain hover:scale-110 transition-transform"
                        src={item.image}
                        alt={item.title}
                      />
                    </CardBody>
                    <CardFooter className="text-small text-blue-900 justify-between  bg-white">
                      <div>
                      <b>{item.title}</b>
                      <p className="text-default-500 text-start">{item.category}</p>
                      </div>

                      <p className="text-default-500">{item.price}$</p>
                    </CardFooter>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex container justify-center items-center gap-8 mx-auto mt-8 mb-8">
          <Pagination
            total={10}
            color={"warning"}
            page={currentPage}
            onChange={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
}
