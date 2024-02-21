import React from "react";

export default function Like({ countLike }) {
  return (
    <div className="flex flex-row gap-2 px-3">
      <h1 className="text-sm font-medium">{countLike}</h1>
      <h1 className="text-sm font-medium">Likes</h1>
    </div>
  );
}
