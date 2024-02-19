import { Link } from "react-router-dom";
import Avatar from "./Avatar";

export default function FriendProfile({
  profileImage,
  userName,
  symbol,
  extendClassName,
  symbolClassName,
  userId,
}) {
  return (
    <Link
      to={`/profile/${userId}`}
      className="flex flex-row justify-between hover:bg-gray-100 py-2 group"
    >
      <div className="ml-[1.3rem] group-hover:cursor-pointer">
        <Avatar
          extendClassName={`w-[3rem] h-[3rem] ${extendClassName}`}
          src={profileImage}
        />
      </div>
      <div className="group-hover:cursor-pointer">
        <h1 className="text-xs font-medium my-4 w-[13.5vw]">{userName}</h1>
      </div>
      <button
        className={`text-gray-600 font-bold text-lg mr-[1.5rem] ${symbolClassName}`}
      >
        {symbol}
      </button>
    </Link>
  );
}

export function SuggestedProfile({ userName, fisrtName, lastName, src }) {
  return (
    <div className="flex flex-row">
      <Link to="/profile/:userId">
        <Avatar
          src={src}
          extendClassName="w-[3rem] h-[3rem] hover:cursor-pointer"
        />
      </Link>
      <div className="flex flex-col mt-1 ml-3">
        <Link
          to="/profile/:userId"
          className="text-sm font-semibold hover:cursor-pointer"
        >
          {userName}
        </Link>
        <div className="flex flex-row gap-1">
          <h2 className="text-sm">{fisrtName}</h2>
          <h2 className="text-sm">{lastName}</h2>
        </div>
      </div>
    </div>
  );
}
