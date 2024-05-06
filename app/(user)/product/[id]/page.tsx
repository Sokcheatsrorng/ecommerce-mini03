'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGetProductByIdQuery } from '@/redux/service/product';
import { any } from "prop-types";
import { FaCartShopping } from "react-icons/fa6";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import Loading from '@/app/loading';
import ProductDetailComponent from '@/components/card/CardProductDtail';

export type ParamProps = {
    params: {
        id: number;
    };
};

function DetailPage({ params }: ParamProps) {
    const dispatch = useAppDispatch();
    const id = params.id;
    const { data: product, error, isLoading } = useGetProductByIdQuery(id);

    if (!product) return <div>No product found.</div>;

    const { name, image, price, desc,category } = product;

    const handleAddToCart = () => {
        dispatch(addToCart({
            id: id,
            title: name,
            price: price,
            description: desc,
            category: category,
            image: image
        }));
    }

    if (isLoading) return <div><Loading /></div>;

    return (
        <main>
            <section className="my-10 grid place-content-center">
                <ProductDetailComponent
                    id={id}
                    title={name}
                    price={price}
                    desc={desc}
                    image={image}
                    onClick={handleAddToCart}
                    category={category} />
            </section>
        </main>
    );
}

export default DetailPage;
