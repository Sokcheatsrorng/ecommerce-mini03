import React from "react";
import { Spinner } from "flowbite-react"

export default function Loading() {
  return (
    <div className="h-screen grid place-content-center text-6xl">
      <div className="flex gap-4">
	  <Spinner aria-label="Extra large spinner example" size="xl"className="bg-blue-900"/>
	  <span className="pl-2 text-blue-900">Loading...</span>

      </div>
    </div>
  );
}
