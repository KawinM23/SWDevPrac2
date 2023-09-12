"use client";
import { useState } from "react";
import Image from "next/image";

export default function Banner() {
  const [index, setIndex] = useState(0);

  const imgSrc = [
    "/img/cover1.avif",
    "/img/cover2.avif",
    "/img/cover3.avif",
    "/img/cover4.avif",
  ];

  return (
    <div className="block h-[60vh] relative">
      <Image
        src={imgSrc[index]}
        alt="cover"
        fill={true}
        priority
        className="opacity-60 object-cover"
        onClick={() => {
          setIndex((index + 1) % imgSrc.length);
        }}
      />
      <div className="z-20 top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 text-3xl font-bold text-[#142680]  absolute text-center ">
        <h1 className="text-5xl">Vaccination Service</h1>
        <h2>because Health is importent</h2>
      </div>
    </div>
  );
}
