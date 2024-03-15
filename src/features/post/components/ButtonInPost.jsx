import React from "react";
import { CommentIcon, LikeIcon } from "../../../icons/Icons";
import { useState } from "react";
import useAuth from "../../../hooks/use-auth";
import usePost from "../hooks/use-post";
import { useEffect } from "react";

export default function ButtonInPost({ like, postId }) {
  // console.log(like);
  // const [isClickLike, setIsClickLike] = useState(false);
  const { userData } = useAuth();
  const { createLike, deleteLike } = usePost();

  const checkIsLike = like.filter((el) => +el.userId === +userData?.id);

  // console.log(checkIsLike, "checkIsLike");

  // console.log(checkIsLike?.[0]?.postId, "----------------------");

  const onLike = async () => {
    await createLike(postId, userData?.id);
    // setIsClickLike((prev) => !prev);
  };

  const onUnlike = async () => {
    await deleteLike(postId, userData?.id);
    // setIsClickLike((prev) => !prev);
  };

  return (
    <div className="flex flex-row gap-3 m-2">
      <div>
        {checkIsLike.length > 0 ? (
          <LikeIcon
            onClick={onUnlike}
            className="hover:cursor-pointer fill-red-500"
            stroke="#ef4444"
          />
        ) : (
          <LikeIcon
            onClick={onLike}
            className="hover:cursor-pointer "
            stroke="#000000"
          />
        )}
      </div>
      <div>
        <CommentIcon className="hover:cursor-pointer" />
      </div>
    </div>
  );
}
