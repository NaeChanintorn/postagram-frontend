export default function Dropdown({ onClick, extendClassName, title }) {
  return (
    <>
      <ul
        className={`${extendClassName} absolute bg-white shadow-[0_0_10px_rgb(0,0,0,0.2)] p-2 rounded-lg translate-y-1 w-28`}
      >
        <li
          className="text-sm font-normal hover:bg-gray-200 p-2 rounded-lg"
          role="button"
          onClick={onClick}
        >
          {title}
        </li>
      </ul>
    </>
  );
}
