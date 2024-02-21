import React from "react";
import Button from "../../../components/Button";

export default function Editform({ value, onChange }) {
  return (
    <>
      <div className="mt-10 w-[12.8vw] flex justify-center">
        <h1 className="text-xl font-semibold">Caption</h1>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center mt-5 w-[70%] h-[30vh]">
          <textarea
            className="w-full outline outline-1 rounded-lg flex p-5 resize-none"
            type="text"
            maxLength="150"
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
      <div className="flex flex-row justify-around gap-14 w-full mt-8">
        <Button text="Save" extendClassName="w-[6vw] invisible" />
        <Button type="submit" text="Save" extendClassName="w-[6vw]" />
      </div>
    </>
  );
}
