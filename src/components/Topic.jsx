export default function Topic({ symbol, title, onClick }) {
  return (
    <div
      onClick={onClick}
      className="rounded-lg py-3.5 m-4 hover:cursor-pointer hover:bg-gray-200 group"
    >
      <div className="flex flex-row gap-5 mx-3">
        <div className="">{symbol}</div>
        <div className="font-normal group-hover:font-bold">{title}</div>
      </div>
    </div>
  );
}
