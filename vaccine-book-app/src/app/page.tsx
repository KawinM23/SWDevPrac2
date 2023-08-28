import Banner from "@/components/Banner";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main>
      <Banner />
      <div
        style={{
          margin: "20px",
          display: "flex",
          flexDirection: "row",
          overflowWrap: "normal",
          justifyContent: "space-around",
        }}
      >
        <Card name="Chulalongkorn Hospital" imgSrc="/img/chula.jpg" />
        <Card name="Rajavithi Hospital" imgSrc="/img/rajavithi.jpg" />
        <Card
          name="Thammasat University Hospital"
          imgSrc="/img/thammasat.jpg"
        />
      </div>
    </main>
  );
}
