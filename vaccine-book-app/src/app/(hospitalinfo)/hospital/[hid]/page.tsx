import { getHospital } from "@/libs/getHospital";
import Image from "next/image";

export default async function Page({ params }: { params: { hid: string } }) {
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
