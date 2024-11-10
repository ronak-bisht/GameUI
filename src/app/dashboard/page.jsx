import Image from "next/image";
import React from "react";
import Options from "../../components/Options"
import Scrollable from "../../components/CardSection";
import Heaader from "../../components/Header";
const GameInterface = () => {
 
  return (
    <div className=" dashboard">
      <div className="custom-container h-screen p-4">

        {/* Header with logo */}
        <Heaader />

        {/* Main content */}
        <div className="flex sm:gap-10 gap-3 mt-[5rem]">
          {/* Left sidebar */}
          <div className="flex sm:w-[600px] w-[140px]  gap-10">
            <Options />

            {/* Featured game card */}
            <div className=" sm:block hidden p-4 w-[250px]  frame">
              <div className="w-full h-[500px] bg-zinc-800 rounded-lg overflow-hidden">
                <Image
                  src="/images/sidepic.png"
                  width={1000}
                  height={1000}
                  className="w-full h-full"
                  alt="logo"
                />
              </div>
            </div>
          </div>

        {/* scrollable carasuel card */}
          <Scrollable />
        </div>
      </div>
    </div>
  );
};

export default GameInterface;
