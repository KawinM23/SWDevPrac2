"use client";
import { useReducer } from "react";
import Card from "./Card";

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

  return (
    <div className="m-[20px] flex flex-row justify-around">
      <Card
        name="Chulalongkorn Hospital"
        imgSrc="/img/chula.jpg"
        rating={ratingMap.get("Chulalongkorn Hospital")}
        onRatingChanged={(h: string, r: number) => {
          dispatchRating({ type: "add", hospital: h, rating: r });
        }}
        onRemove={(h: string) => {
          dispatchRating({ type: "remove", hospital: h });
        }}
      />
      <Card
        name="Rajavithi Hospital"
        imgSrc="/img/rajavithi.jpg"
        rating={ratingMap.get("Rajavithi Hospital")}
        onRatingChanged={(h: string, r: number) => {
          dispatchRating({ type: "add", hospital: h, rating: r });
        }}
        onRemove={(h: string) => {
          dispatchRating({ type: "remove", hospital: h });
        }}
      />
      <Card
        name="Thammasat University Hospital"
        imgSrc="/img/thammasat.jpg"
        rating={ratingMap.get("Thammasat University Hospital")}
        onRatingChanged={(h: string, r: number) => {
          dispatchRating({ type: "add", hospital: h, rating: r });
        }}
        onRemove={(h: string) => {
          dispatchRating({ type: "remove", hospital: h });
        }}
      />
    </div>
  );
}
