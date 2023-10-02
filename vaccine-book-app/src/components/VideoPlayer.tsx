"use client";

import { useEffect, useRef } from "react";

export function VideoPlayer({
  vdoSrc,
  isPlaying,
}: {
  vdoSrc: string;
  isPlaying: boolean;
}) {
  const vdoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (isPlaying) {
      vdoRef.current?.play();
    } else {
      vdoRef.current?.pause();
    }
  }, [isPlaying]);

  return (
    <video src={vdoSrc} ref={vdoRef} className="w-[40%]" controls loop muted />
  );
}
