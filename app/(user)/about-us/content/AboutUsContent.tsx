import React from "react";
import Image from "next/image";

export default function AboutUsContent() {
  return (
    <>
      <div className=" w-full relative ">
        <div className="w-full md:w-[50%] h-[250px]  absolute ml-[20px] ">
          <Image
            width={500}
            height={500}
            src="https://i.pinimg.com/236x/f6/37/32/f6373270355ab8e024a7f78967425e68.jpg"
            alt={""}
          ></Image>
        </div>
        <div className="w-full md:w-[50%] h-[250px] z-1  absolute mt-[200px] ml-[290px]">
          <Image
            width={500}
            height={500}
            src="https://i.pinimg.com/474x/78/55/4b/78554b0205391a2c73d9a0de4f44a5fd.jpg"
            alt={""}
          ></Image>
        </div>
      </div>
      <div className="w-full">
        <section className="p-8 text-gray-700">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="leading-6">
            Welcome to Your Ecommerce, where quality meets convenience. We're
            passionate about providing you with an unparalleled online shopping
            experience, offering a diverse selection of top-notch products that
            cater to every aspect of your lifestyle.
          </p>
          <p className="leading-6">
            Whether you're searching for fashion, gadgets, home essentials, or
            gifts, we've got you covered. Our curated collection features top
            brands and unique finds, ensuring something special every time you
            visit.
          </p>
          <p className="leading-6">
            We're more than just a place to shop. We're a community of
            like-minded individuals who share a love for quality products and
            exceptional service. Our dedicated team ensures a seamless shopping
            journey, from fast shipping to responsive customer support.
          </p>
          <p className="leading-6">
            Thank you for choosing Your Ecommerce. Experience excellence with
            every purchase.
          </p>
        </section>
      </div>
    </>
  );
}
