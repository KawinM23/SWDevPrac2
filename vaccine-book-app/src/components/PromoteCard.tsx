"use client";
import { useRef, useState } from "react";
import { VideoPlayer } from "./VideoPlayer";
import { useWindowListener } from "@/hooks/useWindowListener";

export default function PromoteCard() {
  const [isPlaying, setIsPlaying] = useState(true);

  const promoteCardRef = useRef<HTMLDivElement>(null);

  useWindowListener(
    "contextmenu",
    (e) => {
      e.preventDefault();
    },
    promoteCardRef.current
  );

  return (
    <div
      className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-gray-200 flex flex-row"
      ref={promoteCardRef}
    >
      <VideoPlayer vdoSrc={"/video/getvaccine.mp4"} isPlaying={isPlaying} />
      <div className="text-2xl ml-3">
        Get your vaccine today.
        <button
          className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 mt-2 text-white shadow-sm"
          onClick={() => {
            setIsPlaying(!isPlaying);
          }}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
}
