import { Suspense } from "react";
import '@/app/globals.css'
import Loading from "./loading";
import Error from "./error";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Poppins } from "next/font/google";
import { Metadata } from "next";
import StoreProvider from "./StoreProvider";
import SessionWrapper from "./SessionProvider";
import { AOSInit } from "./(user)/aos/AOSProvider";
import NavbarComponent from "@/components/layout/navbar/NavbarComponent";
import { FooterComponent } from "@/components/layout/footer/FooterComponent";


export const metadata: Metadata = {
	title: "COZZY SHOP",
	description: "COZZY SHOP Web is a web application for selling products.",
	openGraph: {
		title: "COZZY SHOP",
		description:
			"ISTAD Ecommerce Web is a web application for selling products.",
		images: "https://store.istad.co/media/brand_images/sokea_AF6QosU.jpg",
	},
};

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600"],
	display: "swap",
	style: ["italic", "normal"],
	variable: "--font-poppins",
  });
  
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
		  <SessionWrapper>
			<AOSInit />
			<body
			  className={`${poppins.className}`}
			  style={{ backgroundColor: "#FFFFFF" }}
			>
			  <StoreProvider>
				<header>
				  <NavbarComponent />
				</header>
				<ErrorBoundary errorComponent={Error}>
				  <Suspense fallback={<Loading />}>{children}</Suspense>
				</ErrorBoundary>
				<footer>
				  <FooterComponent/>
				</footer>
			  </StoreProvider>
			</body>
		  </SessionWrapper>
		</html>
	  );
}
