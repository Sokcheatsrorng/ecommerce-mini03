"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useUpdateProductMutation } from "@/redux/service/product";
import React, { useState } from "react";
import { selectToken, setAccessToken } from "@/redux/features/auth/authSlice";

export default function TestJWT() {
	const [user, setUser] = useState(null);
	const [unAthorized, setUnAuthorized] = useState(false);

	const dispatch = useAppDispatch();
	const accessToken = useAppSelector(selectToken);
	const [updateProduct, { data, error, isLoading }] =
		useUpdateProductMutation();

	console.log("Access token: from Redux store", accessToken);

	console.log("Data from rtk query: ", data);
	console.log("Error from rtk query: ", error);

	// handle update product by id with rtk query
	const handleUpdateWithRTK = async () => {
		updateProduct({
			id: 499,
			updatedProduct: {
				name: "casual wardrobe update5",
			},
		});
	};

	// handle login
	const handleLogin = async () => {
		const email = "sangsokea109@gmail.com";
		const password = "admin@1234";

		fetch(process.env.NEXT_PUBLIC_API_URL + "/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password }),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log("Data in jwt test: ", data);

				dispatch(setAccessToken(data.accessToken));
				setUser(data.user);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	// handle patial update
	const handlePartialUpdate = async () => {
		const body = {
			name: "casual wardrobe update1",
		};

		const res = await fetch(
			`${process.env.NEXT_PUBLIC_DJANGO_API_URL}/api/products/${499}`,
			{
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${accessToken}`,
				},
				body: JSON.stringify(body),
			}
		);

		if (res.status === 401) {
			setUnAuthorized(true);
		}

		const data = await res.json();
		console.log("Data from partial update: ", data);
	};

	// hande refresh token
	const handleRefreshToken = async () => {
		fetch(process.env.NEXT_PUBLIC_API_URL + "/refresh", {
			method: "POST",
			credentials: "include",
			body: JSON.stringify({}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log("Data from refresh token: ", data);
				dispatch(setAccessToken(data.accessToken));
			})
			.catch((error) => {
				console.log(error);
			});
	};

	// handle logout
	const handleLogout = async () => {
		fetch(process.env.NEXT_PUBLIC_API_URL + "/logout", {
			method: "POST",
			credentials: "include",
			body: JSON.stringify({}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log("Data from logout : ", data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	if (isLoading)
		return (
			<main className="h-screen grid place-content-center">
				<h1 className="text-5xl ">Loading...</h1>
			</main>
		);
	return (
		<main className="h-screen grid place-content-center">
			<h1 className="text-5xl ">TEST Handle Login</h1>
			<button
				onClick={handleLogin}
				className="my-4 p-4 bg-blue-600 rounded-xl text-3xl text-gray-100"
			>
				Login
			</button>
			<button
				onClick={handlePartialUpdate}
				className="my-4 p-4 bg-blue-600 rounded-xl text-3xl text-gray-100"
			>
				Partial Update
			</button>
			{/* {unAthorized && (
				<button
					onClick={handleRefreshToken}
					className="my-4 p-4 bg-blue-600 rounded-xl text-3xl text-gray-100"
				>
					Refresh
				</button>
			)} */}
			<button
				onClick={handleLogout}
				className="my-4 p-4 bg-blue-600 rounded-xl text-3xl text-gray-100"
			>
				Logout
			</button>
			<button
				onClick={handleUpdateWithRTK}
				className="my-4 p-4 bg-blue-600 rounded-xl text-3xl text-gray-100"
			>
				Handle Update with RTK
			</button>
		</main>
	);
}
