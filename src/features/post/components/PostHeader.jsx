import { useState } from "react";
import Avatar from "../../../components/Avatar";
import { EditPostIcon } from "../../../icons/Icons";
import DropdownForPost from "../../../components/DropdownForPost";
import { EditPostModal } from "./EditPostModal";
import formatTimeAgo from "../../../utilities/time-ago";
import useAuth from "../../../hooks/use-auth";
import usePost from "../hooks/use-post";
import { toast } from "react-toastify";

export default function PostHeader({ userName, src, createdAt, id, postId }) {
  const [dropdown, setDropdown] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const { userData } = useAuth();
  const { deletePostInHomePage } = usePost();
  // console.log(userData.id, "...........................");
  // console.log(userData.posts);
  // console.log(allPosts);

  const handleDeletePost = (e) => {
    try {
      // console.log("---------------------------");
      e.preventDefault();
      console.log(postId);
      deletePostInHomePage(postId);
      toast.success("Delete post success");
    } catch (error) {
      toast.error(error.response?.data.message);
    }
  };

  return (
    <div className="flex flex-row justify-between h-[8vh] mx-2 ">
      <div className="flex flex-row justify-start gap-2">
        <div className="flex items-center">
          <Avatar src={src} extendClassName="w-[2.2rem] h-[2.2rem]" />
        </div>
        <h1 className="text-sm font-medium flex items-center">{userName}</h1>
        <small className="text-gray-500 flex items-center">
          {formatTimeAgo(createdAt)}
        </small>
      </div>
      <div className="flex items-center">
        {id === +userData?.id ? (
          <div className="relative">
            <EditPostIcon onClick={() => setDropdown(!dropdown)} />

            {dropdown && (
              <DropdownForPost
                title1="Edit Post"
                title2="Delete Post"
                onClick1={() => setIsEdit(true)}
                onClick2={handleDeletePost}
              />
            )}
            {isEdit && (
              <EditPostModal postId={postId} onClose={() => setIsEdit(false)} />
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
