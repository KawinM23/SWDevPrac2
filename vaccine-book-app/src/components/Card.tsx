import styles from "./card.module.css";

export default function Card(props: any) {
  return (
    <div className={styles.card}>
      <h2>{props.title}</h2>
      <p>{props.children}</p>
    </div>
  );
}
