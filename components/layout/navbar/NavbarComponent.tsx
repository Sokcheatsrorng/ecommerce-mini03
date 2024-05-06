"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { MenuList } from "./menu";
import CartNavbar from "./CartNavbar";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function App() {
  const pathname = usePathname();
  if (pathname.includes("/login" && "/signup")) return null;
  else
    return (
      <Navbar disableAnimation isBordered className="fixed w-full top-0 shadow-none border-none p-0 ">
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          {/* <Image
            width={500}
            height={500}
            src={"/assets/COZZY.png"}
            alt={"Cozzy Logo"}
          /> */}
          <NavbarBrand>
            <p className="font-bold text-inherit">COZZY</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarBrand className="hidden md:block">
          {/* <Image  
        width={200}
        height={200}
        src={"/assets/COZZY.png"} 
        alt={"Cozzy Logo"}/> */}
          <p className="font-bold text-inherit ">COZZY</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {MenuList.map((item, index) => (
            <Link
              key={`${item}-${index}`}
              href={item.path}
              className={`block px-4 py-2 text-sm ${
                pathname === item.path
                  ? "font-bold text-orange-400"
                  : "text-blue-900 hover:scale-110 transition-transform"
              }`}
              color={pathname === item.path ? "primary" : "foreground"}
            >
              {item.name}
            </Link>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <CartNavbar />
          <NavbarItem>
            {/* <Button as={Link} color="primary" href="/login" variant="flat">
            Login
          </Button> */}
            <Button
              radius="full"
              as={Link}
              href="/login"
              variant="flat"
              className="bg-gradient-to-tr from-blue-500 to-yellow-200 text-blue-900 shadow-lg  hover:scale-110 transition-transform "
            >
              Login
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {MenuList.map((item, index) => (
            <Link
              key={`${item}-${index}`}
              href={item.path}
              className={`block px-4 py-2 text-sm ${
                pathname === item.path
                  ? "font-bold text-blue-900"
                  : "text-gray-600 hover:text-blue-500"
              }`}
              color={pathname === item.path ? "primary" : "foreground"}
            >
              {item.name}
            </Link>
          ))}
        </NavbarMenu>
      </Navbar>
    );
}
