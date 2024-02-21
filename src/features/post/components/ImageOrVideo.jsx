import React from "react";

export default function ImageOrVideo({ imageorvideo }) {
  const checkImageOrVideo = imageorvideo.endsWith("mp4" || "MPEG-4");
  return (
    <div className="h-[50vh] ">
      {checkImageOrVideo ? (
        <video className="h-full w-full" imageorvideo={imageorvideo} />
      ) : (
        <img
          className="h-full w-full"
          imageorvideo={imageorvideo}
          alt="image"
        />
      )}
    </div>
  );
}
