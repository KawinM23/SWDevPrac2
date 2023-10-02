"use client";
import { useReducer } from "react";
import Card from "./Card";
import Link from "next/link";

export default function CardPanel() {
  const ratingReducer = (
    map: Map<string, number>,
    action: {
      type: string;
      hospital: string;
      rating?: number | undefined;
    }
  ) => {
    switch (action.type) {
      case "add": {
        if (action.rating != undefined && action.rating != null) {
          map.set(action.hospital, action.rating);
        }
        return new Map(map);
      }
      case "remove": {
        map.delete(action.hospital);
        return new Map(map);
      }
      default:
        return map;
    }
  };

  const [ratingMap, dispatchRating] = useReducer(
    ratingReducer,
    new Map([
      ["Chulalongkorn Hospital", 1],
      ["Rajavithi Hospital", 3],
      ["Thammasat University Hospital", 5],
    ])
  );

  const hospitalArray = [
    { id: "001", name: "Chulalongkorn Hospital", imgSrc: "/img/chula.jpg" },
    { id: "002", name: "Rajavithi Hospital", imgSrc: "/img/rajavithi.jpg" },
    {
      id: "003",
      name: "Thammasat University Hospital",
      imgSrc: "/img/thammasat.jpg",
    },
  ];

  return (
    <div className="m-[20px] flex flex-row justify-around">
      {hospitalArray.map((hospital) => {
        return (
          <Link href={`/hospital/${hospital.id}`}>
            <Card
              name={hospital.name}
              imgSrc={hospital.imgSrc}
              rating={ratingMap.get(hospital.name)}
              onRatingChanged={(h: string, r: number) => {
                dispatchRating({ type: "add", hospital: h, rating: r });
              }}
              onRemove={(h: string) => {
                dispatchRating({ type: "remove", hospital: h });
              }}
            />
          </Link>
        );
      })}
    </div>
  );
}
