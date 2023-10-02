import Image from "next/image";

export default function Page({ params }: { params: { hid: string } }) {
  const mockHospital = new Map();
  mockHospital.set("001", {
    name: "Chulalongkorn Hospital",
    imgSrc: "/img/chula.jpg",
  });
  mockHospital.set("002", {
    name: "Rajavithi Hospital",
    imgSrc: "/img/rajavithi.jpg",
  });
  mockHospital.set("003", {
    name: "Thammasat University Hospital",
    imgSrc: "/img/thammasat.jpg",
  });

  return (
    <div className="p-5 flex">
      <span className="relative w-[30%] rounded-xl overflow-hidden border-2 mr-10">
        <Image
          src={mockHospital.get(params.hid).imgSrc}
          alt={mockHospital.get(params.hid).name}
          width={500}
          height={500}
          className=""
        ></Image>
      </span>
      <h1>{mockHospital.get(params.hid).name}</h1>
    </div>
  );
}

export async function generateStaticParams() {
  return [{ hid: "001" }, { hid: "002" }, { hid: "003" }, { hid: "004" }];
}
