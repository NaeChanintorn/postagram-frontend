import Avatar from "./Avatar";

export default function FriendProfile({
  profileImage,
  name,
  symbol,
  extendClassName,
}) {
  return (
    <div className="flex flex-row justify-between hover:bg-gray-100 py-2 group">
      <div className="ml-[1.3rem] group-hover:cursor-pointer">
        <Avatar
          extendClassName={`w-[3rem] h-[3rem] ${extendClassName}`}
          profileImage={profileImage}
        />
      </div>
      <div className="group-hover:cursor-pointer">
        <h1 className="text-xs font-medium my-4 w-[13.5vw]">{name}</h1>
      </div>
      <button className="text-gray-600 font-bold text-lg mr-[1.5rem]">
        {symbol}
      </button>
    </div>
  );
}
