import { getHospital } from "@/libs/getHospital";
import Image from "next/image";

export default async function Page({ params }: { params: { hid: string } }) {
  // const mockHospital = new Map();
  // mockHospital.set("001", {
  //   name: "Chulalongkorn Hospital",
  //   imgSrc: "/img/chula.jpg",
  // });
  // mockHospital.set("002", {
  //   name: "Rajavithi Hospital",
  //   imgSrc: "/img/rajavithi.jpg",
  // });
  // mockHospital.set("003", {
  //   name: "Thammasat University Hospital",
  //   imgSrc: "/img/thammasat.jpg",
  // });

  const hospitalRes = await getHospital(params.hid);
  const hospital = hospitalRes.data;

  return (
    <div className="p-5 flex mx-auto w-[75%]">
      <span className="relative w-[30%] rounded-xl overflow-hidden border-2 mr-10">
        <Image
          src={hospital.picture}
          alt={hospital.name}
          width={500}
          height={0}
        ></Image>
      </span>
      <div>
        <h1 className="text-lg font-semibold">{hospital.name}</h1>
        <p>Address: {hospital.address}</p>
        <p>District: {hospital.district}</p>
        <p>Province: {hospital.province}</p>
        <p>Postal code: {hospital.postcode}</p>
        <p>Telephone: {hospital.tel}</p>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return [{ hid: "001" }, { hid: "002" }, { hid: "003" }, { hid: "004" }];
}
