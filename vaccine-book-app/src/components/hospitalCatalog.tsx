import Link from "next/link";
import Card from "./Card";

export default async function HospitalCatalog({
  hospitalJson,
}: {
  hospitalJson: Object;
}) {
  const hospitalJsonReady = await hospitalJson;
  return (
    <div>
      Select {hospitalJsonReady.count} Hospitals Available
      <div className="m-[20px] flex flex-row justify-around">
        {hospitalJsonReady.data.map((hospital: Object) => {
          return (
            <Link href={`/hospital/${hospital.id}`} key={hospital.id}>
              <Card
                name={hospital.name}
                imgSrc={hospital.picture}
                rating={undefined}
                onRatingChanged={null}
                onRemove={null}
                // rating={ratingMap.get(hospital.name)}
                // onRatingChanged={(h: string, r: number) => {
                //   dispatchRating({ type: "add", hospital: h, rating: r });
                // }}
                // onRemove={(h: string) => {
                //   dispatchRating({ type: "remove", hospital: h });
                // }}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
