"use client"
import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { useLoginMutation } from "@/redux/service/auth"; // Corrected import path
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { fetchUserProfile } from "@/redux/features/userProfile/userProfileSlice";
import { useSession, signIn, signOut } from "next-auth/react";
import Loading from "@/app/loading";
import Image from "next/image";

type ValueTypes = {
  email: string;
  password: string;
};

const initialValues: ValueTypes = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});


export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [login, { isLoading, isError }] = useLoginMutation();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleFormSubmit = async (values: ValueTypes, actions: any) => {
    try {
      const response = await login({
        email: values.email,
        password: values.password,
      });

      // Display toast notification
      toast.success("Login successful!");

      // Push a new entry onto the history stack to ensure the user can navigate back
      router.push("/activate-confirm-email");
    } catch (error) {
      console.error("Login failed:", error);
      // Display more specific error messages based on the error type
      let errorMessage = "Login failed. Please try again.";
      // if (error.response && error.response.data && error.response.data.message) {
      //   errorMessage = error.response.data.message;
      // }
      toast.error(errorMessage);
    }
  };

  if (sessionStatus === "loading") {
    return <div><Loading/></div>;
  }
 
// return (
//   <main className="w-full h-screen flex flex-col justify-center items-center">
//     <div className="w-44 h-44 relative mb-4">
//       <Image
//         src={data.user?.image as string}
//         fill
//         alt=""
//         className="object-cover rounded-full"
//       />
//     </div>
//     <p className="text-2xl mb-2">
//       Welcome <span className="font-bold">{data.user?.name}</span>. Signed
//       In As
//     </p>
//     <p className="font-bold mb-4">{data.user?.email}</p>
//     <button
//       className="bg-red-600 py-2 px-6 rounded-md"
//       onClick={() => signOut()}
//     >
//       Sign out
//     </button>
//   </main>
// );

  return (
    <main className={`${style.container}`}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        <Form className="bg-gray-100 p-4 rounded-lg w-96">
          <h1 className={`${style.title}`}>Login</h1>
          {/* Email */}
          <div className="mb-5">
            <label className={`${style.label}`} htmlFor="email">
              Email
            </label>
            <Field
              type="email"
              name="email"
              id="email"
              className={`${style.input}`}
            />
            <ErrorMessage
              name="email"
              component="section"
              className={`${style.error}`}
            />
          </div>

          {/* Password */}
          <div className="mb-5">
            <label className={`${style.label}`} htmlFor="password">
              Password
            </label>
            <div className="relative">
              <Field
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                className={`${style.input}`}
              />
              {!showPassword ? (
                <IoEyeOffSharp
                  onClick={() => handleShowPassword()}
                  className="cursor-pointer absolute right-2 top-4"
                />
              ) : (
                <IoEyeSharp
                  onClick={() => handleShowPassword()}
                  className="cursor-pointer absolute right-2 top-4"
                />
              )}
            </div>
            <ErrorMessage
              name="password"
              component="section"
              className={`${style.error}`}
            />
          </div>

          {/* button submit */}
          <button type="submit" className={`${style.button}`} disabled={isLoading}>
            {isLoading ? "Loading..." : "Submit"}
          </button>

          {/* Show error if login fails */}
          {isError && <div className="text-red-500">Login failed!</div>}
        </Form>

        if (!session) {
    <main className="w-full h-screen flex flex-col justify-center items-center">
      <p className="text-2xl mb-2">Not Signed In</p>
      <button
        className="bg-blue-600 py-2 px-6 rounded-md text-white mb-2"
        onClick={() => signIn("google")}
      >
        Sign in with Google
      </button>
      <button
        className="bg-none border-gray-300 border py-2 px-6 rounded-md mb-2"
        onClick={() => signIn("github")}
      >
        Sign in with GitHub
      </button>
    </main> 
}
      </Formik>
    </main>
  );
}
