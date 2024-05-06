
"use client"
import { Footer } from "flowbite-react";
import { MenuList } from "../navbar/menu";

export function FooterComponent() {
  return (
    <Footer container className="flex justify-center items-center shadow-none">
      <div className="w-full lg:w-[70%] text-center lg:ml-[15%] md:w-full">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <Footer.Brand
            href="https://flowbite.com"
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Flowbite Logo"
            name="Flowbite"
          />
          <Footer.LinkGroup className="mt-4 sm:mt-0 text-blue-900 ">
            {MenuList.map((item) => (
              <Footer.Link href={item.path}>{item.name}</Footer.Link>
            ))}
          </Footer.LinkGroup>
        </div>
        <Footer.Divider className="my-4" />
        <Footer.Copyright
          className="text-center"
          href="/"
          by="COZZY™"
          year={2024}
        />
      </div>
    </Footer>
  );
}
