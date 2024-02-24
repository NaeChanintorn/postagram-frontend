import React from "react";
import { useState } from "react";
import usePost from "../hooks/use-post";
import PostModalInHomePage from "./PostModalInHomePage";

export default function Comment({
  userName,
  imageorvideo,
  caption,
  countComment,
  postId,
  src,
  createdAt,
  like,
  setIsClick,
}) {
  const [input, setInput] = useState("");
  const [onClick, setOnClick] = useState(false);

  const { createCommentContext } = usePost();

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createCommentContext(input, postId);
    setIsClick((prev) => !prev);
    setInput("");
  };

  return (
    <div className="m-2">
      <div className="flex flex-row gap-2">
        <span className="text-sm font-medium">{userName}</span>
        <span className="text-sm font-normal">{caption}</span>
      </div>

      <span
        onClick={() => setOnClick(true)}
        className="text-sm font-normal hover:cursor-pointer"
      >
        View all {countComment} comments
      </span>
      {onClick && (
        <PostModalInHomePage
          imageorvideo={imageorvideo}
          onClose={() => setOnClick(false)}
          caption={caption}
          src={src}
          postId={postId}
          createdAt={createdAt}
          like={like}
          userName={userName}
        />
      )}

      {input ? (
        <form onSubmit={handleSubmit} className="relative">
          <textarea
            type="text"
            className=" my-3 pr-16 text-sm bg-[rgb(255, 255, 255)] w-full resize-none focus:outline-none "
            maxLength="150"
            placeholder="Add a comment........"
            value={input}
            onChange={handleChangeInput}
          />
          <button
            // onClick={() => setIsClick((prev) => !prev)}
            className="absolute top-3 right-3 text-sm font-semibold text-blue-400 hover:text-blue-600"
          >
            post
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmit} className="relative">
          <textarea
            type="text"
            className="z-0 my-3 pr-16 text-sm bg-[rgb(255, 255, 255)] w-full resize-none focus:outline-none "
            maxLength="150"
            placeholder="Add a comment........"
            value={input}
            onChange={handleChangeInput}
          />
          <button
            // onClick={() => setIsClick((prev) => !prev)}
            className="absolute top-3 right-3 text-sm font-semibold text-blue-400 hover:text-blue-600 hidden"
          >
            post
          </button>
        </form>
      )}
    </div>
  );
}
