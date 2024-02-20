import React from "react";

export default function PostInProfile({ src }) {
  const checkImageOrVideo = src.endsWith("mp4" || "MPEG-4");
  return (
    <div className="bg-gray-200 w-[15vw] h-[32vh]  ">
      {checkImageOrVideo ? (
        <video className="h-full w-full" src={src} />
      ) : (
        <img className="h-full w-full" src={src} alt="" />
      )}
    </div>
  );
}
