import React from "react";
import TeamComponent from "./team/TeamComponent";
import AboutUsContent from "./content/AboutUsContent";

export default function page() {
  return (
    <div className="w-full md:w-[80%] mx-auto container">
      {/* detail about */}
      <div className=" w-inherit container h-[500px] grid md:grid-cols-2 grid-cols-1 gap-8 mt-8">
        {/* image contents */}
        <AboutUsContent/>
        </div>
      {/* About Team*/}
      <h1 className="text-center font-normal w-full text-4xl mt-8">OUR TEAM</h1>
      <div className="w-inherit container h-[300px] flex gap-8 mt-8 ">
      <TeamComponent/>
      </div>
    </div>
  );
}
