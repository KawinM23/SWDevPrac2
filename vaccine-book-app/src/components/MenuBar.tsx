import Image from "next/image";
import MenuBarItem from "@/components/MenuBarItem";

export default function MenuBar() {
  return (
    <div className="h-20 bg-white fixed top-0 left-0 right-0 z-30 border-y-gray-400 border-y-2 flex flex-row justify-end items-center">
      <MenuBarItem title="Booking" pageRef="/booking" />
      <Image
        src="/img/vaccine-6592893_1280.png"
        alt={"logo"}
        className="h-[90%] w-auto object-contain"
        width={0}
        height={0}
        sizes="100vh"
      />
    </div>
  );
}
