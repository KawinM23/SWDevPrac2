import Banner from "@/components/Banner";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main>
      <Banner />
      <div style={{ margin: "20px" }}>
        <Card title="วัคซีนโคโรนาแวค" detail="">
          {`ในช่วงแรกอนุญาตให้ฉีดได้เฉพาะอายุ 18-59 ปี แต่หลังเดือนพฤษภาคม 2564
          อนุญาตให้ฉีดวัคซีนซิโนแวคในคนที่มีอายุ 60 ปีขึ้นไปได้
          \nจำนวนเข็ม: 2 เข็ม เข็มแรกห่างจากเข็มที่ 2 ราว 2-4 สัปดาห์`}
        </Card>
      </div>
    </main>
  );
}
