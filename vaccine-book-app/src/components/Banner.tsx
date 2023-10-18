"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Banner() {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  const { data: session } = useSession();
  console.log(session);

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
      {session && (
        <div className="absolute right-0 top-0 p-4 z-30 text-cyan-600 font-semibold text-xl">
          Welcome, {session.user?.name}!
        </div>
      )}
      <button
        className=" font-semibold text-xl p-2 m-2 rounded z-30 absolute bottom-5 right-5 bg-white text-cyan-600 border border-cyan-600 hover:text-white hover:border-white hover:bg-cyan-600"
        onClick={() => {
          router.push("/hospital");
        }}
      >
        Hospital
      </button>
    </div>
  );
}
