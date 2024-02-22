import { useEffect } from "react";
import ButtonInPost from "./ButtonInPost";
import Comment from "./Comment";
import ImageOrVideo from "./ImageOrVideo";
import Like from "./Like";
import PostHeader from "./PostHeader";
import usePost from "../hooks/use-post";

export default function Post({
  userName,
  src,
  imageorvideo,
  caption,
  countLike,
  countComment,
  createdAt,
  id,
  postId,
  isDeleted,
  like,
}) {
  return (
    <>
      {isDeleted ? null : (
        <div className="w-[25vw] h-[90vh] flex flex-col">
          {/* Header */}
          <PostHeader
            postId={postId}
            userName={userName}
            src={src}
            createdAt={createdAt}
            id={id}
          />

          {/* Image */}
          <ImageOrVideo imageorvideo={imageorvideo} />

          {/* Button */}
          <ButtonInPost postId={postId} like={like} />

          {/* Like */}
          <Like countLike={countLike} />

          {/* Comment */}
          <Comment
            countComment={countComment}
            userName={userName}
            caption={caption}
            postId={postId}
          />

          <hr className="text-gray-300" />
        </div>
      )}
    </>
  );
}
