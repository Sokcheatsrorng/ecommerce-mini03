// "use client";
// import React, { useState } from "react";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import {
// 	increment,
// 	decrement,
// 	incrementByAmount,
// } from "@/redux/features/counter/counterSlice";

// export default function Enroll() {
// 	const count = useAppSelector((state) => state.counter.value);

// 	const dispatch = useAppDispatch();
// 	const [amount, setAmount] = useState(10);
// 	return (
// 		<main classNameName="h-screen grid place-content-center">
// 			<h1 classNameName="text-5xl text-center">{count}</h1>
// 			<button
// 				onClick={() => dispatch(increment())}
// 				classNameName="my-4 p-4 rounded-xl text-gray-100 bg-blue-600 text-3xl font-semibold"
// 			>
// 				Increase by 1
// 			</button>
// 			<button
// 				onClick={() => dispatch(decrement())}
// 				classNameName="my-4 p-4 rounded-xl text-gray-100 bg-blue-600 text-3xl font-semibold"
// 			>
// 				Decrease by 1
// 			</button>
// 			<button
// 				onClick={() => dispatch(incrementByAmount(amount))}
// 				classNameName="my-4 p-4 rounded-xl text-gray-100 bg-blue-600 text-3xl font-semibold"
// 			>
// 				Increase by {amount}
// 			</button>
// 		</main>
// 	);
// }

export const metadata: Metadata = {
	title: "ISTAD Ecommerce Web",
	description: "ISTAD Ecommerce Web is a web application for selling products.",
	openGraph: {
		title: "ISTAD Ecommerce Web",
		description:
			"ISTAD Ecommerce Web is a web application for selling products.",
		images: "https://store.istad.co/media/brand_images/sokea_AF6QosU.jpg",
	},
};


import { Metadata } from 'next';
import React from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600"],
	display: "swap",
	style: ["italic", "normal"],
	variable: "--font-poppins",
  });
  

export default function Page() {
  return (
    <div className={poppins.className}>
        <div className="w-full md:w-[80%] mx-auto px-4 py-8">
    <ul>
        <li className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Information Collection</h2>
            <p className="text-gray-700">
                Specify what information you collect from users (e.g., personal, payment, br/owsing history, etc.).<br/>
                Explain how you collect this information (e.g., directly from users, cookies, etc.).
            </p>
        </li>
        <li className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Information Use</h2>
            <p className="text-gray-700">
                Describe how you use the collected information (e.g., processing orders, improving user experience, marketing purposes, etc.).<br/>
                Ensure compliance with data protection laws (e.g., GDPR, CCPA).
            </p>
        </li>
        <li className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Information Sharing</h2>
            <p className="text-gray-700">
                State whether you share user information with third parties (e.g., payment processors, shipping companies).<br/>
                Explain the circumstances under which you share information and how users can opt-out.
            </p>
        </li>
        <li className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Security Measures</h2>
            <p className="text-gray-700">
                Outline the security measures in place to protect user information (e.g., encryption, SSL certificates, firewalls).<br/>
                Assure users that their data is secure and that you follow industry best practices.
            </p>
        </li>
        <li className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Cookies</h2>
            <p className="text-gray-700">
                Explain the use of cookies on your website (e.g., tracking user activity, personalization).<br/>
                Provide information on how users can manage or disable cookies.
            </p>
        </li>
        <li className="mb-8">
            <h2 className="text-xl font-semibold mb-4">User Rights</h2>
            <p className="text-gray-700">
                Inform users of their rights regarding their personal information (e.g., right to access, correct, delete).<br/>
                Provide contact information for inquiries or requests regarding user data.
            </p>
        </li>
        <li className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Policy Updates</h2>
            <p className="text-gray-700">
                State that the privacy policy may be updated from time to time.<br/>
                Notify users of any significant changes and provide the effective date of the updated policy.
            </p>
        </li>
    </ul>
</div>
    </div>
	

  );
}
