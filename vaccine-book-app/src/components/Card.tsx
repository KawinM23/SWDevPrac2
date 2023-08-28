import styles from "./card.module.css";
import Image from "next/image";

interface Props {
  name: string;
  imgSrc: string;
}

export default function Card(props: Props) {
  return (
    <div className="w-[400px] h-[300px] shadow-xl rounded-lg overflow-hidden m-4">
      <div className="relative w-full h-[70%]">
        <Image src={props.imgSrc} alt={"Image"} fill={true} objectFit="cover" />
      </div>
      <h2 className="px-4 pt-2 text-2xl text-[#505050]">{props.name}</h2>
    </div>
  );
}
