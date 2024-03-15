import React from "react";
import { CommentIcon, LikeIcon } from "../../../icons/Icons";
import useAuth from "../../../hooks/use-auth";
import usePost from "../hooks/use-post";

export default function ButtonInPost({ like, postId }) {
  const { userData } = useAuth();
  const { createLike, deleteLike } = usePost();

  const checkIsLike = like.filter((el) => +el.userId === +userData?.id);

  const onLike = async () => {
    await createLike(postId, userData?.id);
  };

  const onUnlike = async () => {
    await deleteLike(postId, userData?.id);
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
