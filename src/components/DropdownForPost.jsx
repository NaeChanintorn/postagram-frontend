import { Link } from "react-router-dom";

export default function DropdownForPost({
  onClick1,
  onClick2,
  title1,
  title2,
  extendClassName,
}) {
  return (
    <>
      <ul
        className={`${extendClassName} absolute bg-white shadow-[0_0_10px_rgb(0,0,0,0.2)] p-2 rounded-lg translate-y-1 w-28`}
      >
        <li
          className="text-sm font-normal hover:bg-gray-200 p-2 rounded-lg"
          role="button"
          onClick={onClick1}
        >
          {title1}
        </li>
        <li
          className="text-sm font-normal hover:bg-gray-200 p-2 rounded-lg"
          role="button"
          onClick={onClick2}
        >
          {title2}
        </li>
      </ul>
    </>
  );
}
