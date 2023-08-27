import styles from "./card.module.css";
import Image from "next/image";

interface Props {
  name: string;
  imgSrc: string;
}

export default function Card(props: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <Image src={props.imgSrc} alt={"Image"} fill={true} objectFit="cover" />
      </div>
      <h2 className={styles.cardText}>{props.name}</h2>
    </div>
  );
}
