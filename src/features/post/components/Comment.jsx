import React from "react";
import { useState } from "react";

export default function Comment({ userName, caption, countComment }) {
  const [input, setInput] = useState();

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Comment Api
  };

  return (
    <div className="m-2">
      <div className="flex flex-row gap-2">
        <span className="text-sm font-medium">{userName}</span>
        <span className="text-sm font-normal">{caption}</span>
      </div>
      <span className="text-sm font-normal hover:cursor-pointer">
        View all {countComment} comments
      </span>
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
          <button className="absolute top-3 right-3 text-sm font-semibold text-blue-400 hover:text-blue-600">
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
          <button className="absolute top-3 right-3 text-sm font-semibold text-blue-400 hover:text-blue-600 hidden">
            post
          </button>
        </form>
      )}
    </div>
  );
}
