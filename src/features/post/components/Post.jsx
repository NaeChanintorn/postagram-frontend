import { useEffect } from "react";
import ButtonInPost from "./ButtonInPost";
import Comment from "./Comment";
import ImageOrVideo from "./ImageOrVideo";
import Like from "./Like";
import PostHeader from "./PostHeader";
import usePost from "../hooks/use-post";

export default function Post({ userName, src, imageorvideo, caption }) {
  return (
    <div className="w-[25vw] h-[90vh] flex flex-col">
      {/* Header */}
      <PostHeader userName={userName} src={src} />

      {/* Image */}
      <ImageOrVideo imageorvideo={imageorvideo} />

      {/* Button */}
      <ButtonInPost />

      {/* Like */}
      <Like />

      {/* Comment */}
      <Comment userName={userName} caption={caption} />

      <hr className="text-gray-300" />
    </div>
  );
}
