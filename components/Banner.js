import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]">
      <Image
        src="https://links.papareact.com/0fm"
        objectFit="cover"
        layout="fill"
      />

      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm font-bold sm:text-lg">
          Not sure where to go? perfect.
        </p>
        <button className="text-purple-500 bg-white px-10 py-4 rounded-full font-bold shadow-md my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
