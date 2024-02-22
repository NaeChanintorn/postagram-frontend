import { useState } from "react";
import Dropdown from "./Dropdown";
import useAuth from "../hooks/use-auth";
import { EditPostIcon } from "../icons/Icons";
import usePost from "../features/post/hooks/use-post";
import DropdownForPost from "./DropdownForPost";

export default function EditComment({ id, comment, commentId, postId }) {
  const [dropdown, setDropdown] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState(comment);
  const { userData } = useAuth();
  const { editCommentContext } = usePost();

  const handleSubmit = async () => {
    await editCommentContext(input, postId, commentId);
  };

  return (
    <div className="flex flex-row justify-between w-[15vw]">
      {isEdit ? (
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="focus:outline-none border"
        />
      ) : (
        <span>{comment}</span>
      )}
      {id === +userData?.id ? (
        <div className="relative">
          <EditPostIcon onClick={() => setDropdown(!dropdown)} />
          {dropdown && (
            <>
              {isEdit ? (
                <DropdownForPost
                  extendClassName="top-4 -right-3"
                  title1="Save"
                  onClick1={handleSubmit}
                  title2="Cancel"
                  onClick2={() => setDropdown(false)}
                />
              ) : (
                <DropdownForPost
                  extendClassName="top-4 -right-3"
                  title1="Edit"
                  onClick1={() => setIsEdit(true)}
                  title2="Cancel"
                  onClick2={() => setDropdown(false)}
                />
              )}
            </>
          )}
        </div>
      ) : null}
    </div>
  );
}
