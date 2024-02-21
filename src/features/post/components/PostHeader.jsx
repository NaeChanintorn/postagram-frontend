import { useState } from "react";
import Avatar from "../../../components/Avatar";
import { EditPostIcon } from "../../../icons/Icons";
import DropdownForPost from "../../../components/DropdownForPost";
import { EditPostModal } from "./EditPostModal";

export default function PostHeader({ userName, src }) {
  const [dropdown, setDropdown] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="flex flex-row justify-between h-[8vh] mx-2 ">
      <div className="flex flex-row justify-start gap-2">
        <div className="flex items-center">
          <Avatar src={src} extendClassName="w-[2.2rem] h-[2.2rem]" />
        </div>
        <h1 className="text-sm font-medium flex items-center">{userName}</h1>
        <small className="text-gray-500 flex items-center">7h</small>
      </div>
      <div className="flex items-center">
        <div className="relative">
          <EditPostIcon onClick={() => setDropdown(!dropdown)} />
          {dropdown && (
            <DropdownForPost
              title1="Edit Post"
              title2="Delete Post"
              onClick1={() => setIsEdit(true)}
            />
          )}
          {isEdit && <EditPostModal onClose={() => setIsEdit(false)} />}
        </div>
      </div>
    </div>
  );
}
