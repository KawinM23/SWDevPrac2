import styles from "./banner.module.css";
import Image from "next/image";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image
        src={"/img/cover.avif"}
        alt="cover"
        fill={true}
        objectFit="cover"
        priority
      />
    </div>
  );
}
