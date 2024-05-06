import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardFooter, Button } from "@nextui-org/react";
import Image from "next/image";

// Assuming getMembers is an array of objects
import { getMembers } from "./member";

export default function App() {
  return (
    <div className="container mx-auto gap-6 flex flex-wrap px-8 justify-center items-center">
      {getMembers.map((member, index) => (
        <Card key={index} isFooterBlurred className="w-full md:w-[23%] h-[300px] col-span-12 sm:col-span-5">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">New</p>
            <h4 className="text-black font-medium text-2xl">{member.name}</h4>
          </CardHeader>
          <Image
            width={500} 
            height={500}
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src={member.image}
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">Role: {member.role}</p>
              <p className="text-black text-tiny">Available soon.</p>
              <p className="text-black text-tiny">Get notified.</p>
            </div>
            <Button className="text-tiny" color="primary" radius="full" size="sm">
              Notify Me
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
