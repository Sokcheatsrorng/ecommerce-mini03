import React from 'react';
import Image from 'next/image';
import { FaArrowRightLong } from "react-icons/fa6";

function HeroSectionComponent() {
  return (
    <section className='hero-section bg-gradient-to-tr from-blue-200 to-orange-100 text-start h-[600px] overflow-hidden p-2 md:p-8 md:h-[900px] lg:h-[600px] md:w-full lg:w-[80%] mx-auto'>
      <div className="container mx-auto px-4 md:p-0 py-16 md:py-10 flex flex-col lg:flex-row items-center justify-center">
        <div className="md:w-full md:py-6 lg:w-1/2 lg:mb-0" data-aos="fade-right" >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-2 mb-4 text-blue-900">
            Welcome To COZZY SHOP
          </h1>
          <p className="text-lg tex-blue-200 mb-6">
            Discover a wide range of products at competitive prices. Shop now and enjoy fast shipping
            and excellent customer service.
          </p>
          <button className="bg-gradient-to-tr from-blue-300 to-orange-100 text-blue-900 py-2 px-6 rounded-[25px] hover:bg-blue-300 transition duration-300 flex gap-2 text-center">
            Explore Now <FaArrowRightLong className='mt-1' />
          </button>
        </div>
        <div className="w-full lg:w-1/2 lg:ml-12 mb-2 ">
          <Image
            src="/assets/t-shirt-2.avif"
            alt="Hero Image"
            width={800}
            height={600}
            className='shadow-none animate'
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSectionComponent;