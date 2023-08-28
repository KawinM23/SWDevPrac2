import styles from "./banner.module.css";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="block h-[60vh] relative">
      <Image
        src={"/img/cover.avif"}
        alt="cover"
        fill={true}
        objectFit="cover"
        priority
        className="opacity-60"
      />
      <div className="z-20 top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 text-3xl font-bold text-[#142680]  absolute text-center ">
        <h1 className="text-5xl">Vaccination Service</h1>
        <h2>because Health is importent</h2>
      </div>
    </div>
  );
}
