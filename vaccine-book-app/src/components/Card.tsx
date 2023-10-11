"use client";
import { Rating } from "@mui/material";
import InteractiveCard from "./InteractiveCard";
import Image from "next/image";
import { useEffect } from "react";

interface Props {
  name: string;
  imgSrc: string;
  rating: number | undefined;
  onRatingChanged: Function | null;
  onRemove: Function | null;
}

export default function Card(props: Props) {
  useEffect(() => {}, []);

  return (
    <InteractiveCard>
      <div
        className="w-full h-full text-center"
        onClick={(e) => {
          e.stopPropagation();
          if (props.onRemove != null) {
            props.onRemove(props.name);
          }
        }}
      >
        <div className="relative w-full h-[70%]">
          <Image
            src={props.imgSrc}
            alt={"Image"}
            fill={true}
            className="object-cover"
          />
        </div>
        <h2 className="px-4 pt-2 text-2xl text-[#505050]">{props.name}</h2>
        <div
          className="w-full mt-1 mx-auto"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {props.onRatingChanged && (
            <Rating
              name="hospital-rating"
              value={props.rating != undefined ? props.rating : null}
              onChange={(event, newValue) => {
                event.stopPropagation();
                if (props.onRatingChanged != null) {
                  props.onRatingChanged(props.name, newValue);
                }
              }}
            />
          )}
        </div>
      </div>
    </InteractiveCard>
  );
}
