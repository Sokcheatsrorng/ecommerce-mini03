"use client";

import { Card } from "flowbite-react";
import { CartProductType } from "@/lib/definitions";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { toNamespacedPath } from "node:path/win32";

export default function CardProduct({
	id,
	name,
	image,
	price,
	onClick,
}: CartProductType) {
	const dispatch = useAppDispatch();

	return (
		<>
        </>
	);
}
