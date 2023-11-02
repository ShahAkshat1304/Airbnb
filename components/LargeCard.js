import Image from "next/image";
import React from "react";

const LargeCard = (props) => {
  const { img, title, description, buttonText } = props;

  return (
    <section className="relative py-16 ">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl cursor-pointer"
        />
      </div>

      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64"> {title} </h3>
        <p> {description} </p>

        <button className="text-sm text-white bg-gray-900 rounded-lg py-2 px-4 mt-5 active:scale-95 transition duration-150">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
