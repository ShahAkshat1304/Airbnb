import Image from "next/image";
import React from "react";

const SmallCard = (props) => {
  const { img, location, distance } = props;

  return (
    <div className="flex items-center mx-2 mt-4 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      {/* Left */}
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" alt="hello" className="rounded-lg" />
      </div>
      {/* Right */}
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;