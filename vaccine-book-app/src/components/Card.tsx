import { Rating } from "@mui/material";
import InteractiveCard from "./InteractiveCard";
import Image from "next/image";

interface Props {
  name: string;
  imgSrc: string;
  rating: number | undefined;
  onRatingChanged: Function;
  onRemove: Function;
}

export default function Card(props: Props) {
  return (
    <InteractiveCard>
      <div
        className="w-full h-full"
        onClick={(e) => {
          e.stopPropagation();
          props.onRemove(props.name);
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
          className="w-full mx-4 mt-1"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Rating
            name="hospital-rating"
            value={props.rating != undefined ? props.rating : null}
            onChange={(event, newValue) => {
              event.stopPropagation();
              props.onRatingChanged(props.name, newValue);
            }}
          />
        </div>
      </div>
    </InteractiveCard>
  );
}
