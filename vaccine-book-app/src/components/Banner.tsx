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
      <div className={styles.bannerText}>
        <h1>Vaccination Service</h1>
        <h2>at Siriraj Hospital</h2>
      </div>
    </div>
  );
}
