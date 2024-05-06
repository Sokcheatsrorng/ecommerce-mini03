import { Inter, Suwannaphum } from "next/font/google";
import localFont from "next/font/local"

export const localCustomFont = localFont({
    src: "./fonts/osaka-re.ttf",
    display: "swap",
    variable: "--font-osaka-re",
})

export const inter = Inter({
	weight: ["400", "500", "600", "700"], // you can pass multiple weights
	subsets: ["latin"],
	display: "swap", // swap means font will be displayed immediately.
	variable: "--font-inter", // you can pass custom css variable name
});

export const suwannaphum = Suwannaphum({
	weight: ["400", "700"], // you can pass multiple weights
	subsets: ["khmer"],
	display: "swap", // swap means font will be displayed immediately.
	variable: "--font-suwannaphum", // you can pass custom css variable name
});
