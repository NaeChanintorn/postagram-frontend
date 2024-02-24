import { useState } from "react";
import PostModal from "./PostModal";

export default function PostInProfile({
  src,
  postId,
  caption,
  createdAt,
  like,
}) {
  // console.log(postId);
  const [onClick, setOnClick] = useState(false);

  const checkImageOrVideo = src.endsWith("mp4" || "MPEG-4");
  return (
    <div className="">
      <div
        role="button"
        onClick={() => setOnClick(true)}
        className=" bg-gray-200 w-[15vw] h-[32vh]  "
      >
        {checkImageOrVideo ? (
          <video className="h-full w-full z-0" src={src} />
        ) : (
          <img className="h-full w-full" src={src} alt="" />
        )}
      </div>
      <div className="">
        {onClick && (
          <PostModal
            caption={caption}
            src={src}
            postId={postId}
            onClose={() => setOnClick(false)}
            createdAt={createdAt}
            like={like}
          />
        )}
      </div>
    </div>
  );
}
