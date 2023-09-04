import InteractiveCard from "./InteractiveCard";
import styles from "./card.module.css";
import Image from "next/image";

interface Props {
  name: string;
  imgSrc: string;
}

export default function Card(props: Props) {
  return (
    <InteractiveCard>
      <div className="relative w-full h-[70%]">
        <Image
          src={props.imgSrc}
          alt={"Image"}
          fill={true}
          className="object-cover"
        />
      </div>
      <h2 className="px-4 pt-2 text-2xl text-[#505050]">{props.name}</h2>
    </InteractiveCard>
  );
}
