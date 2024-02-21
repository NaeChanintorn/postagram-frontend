import React from "react";
import { CommentIcon, LikeIcon } from "../../../icons/Icons";

export default function ButtonInPost() {
  return (
    <div className="flex flex-row gap-3 m-2">
      <div>
        <LikeIcon className="hover:cursor-pointer " />
      </div>
      <div>
        <CommentIcon className="hover:cursor-pointer" />
      </div>
    </div>
  );
}
