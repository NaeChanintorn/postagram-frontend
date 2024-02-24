import { toast } from "react-toastify";
import Avatar from "../../../components/Avatar";
import Button from "../../../components/Button";
import useAuth from "../../../hooks/use-auth";
import { useState } from "react";
import Editform from "./Editform";
import usePost from "../hooks/use-post";

export function EditPostModal({ setIsClick, onClose, postId }) {
  const { userData } = useAuth();
  const { editPostInHomePage } = usePost();
  const [caption, setCaption] = useState(userData?.caption);

  const handleSaveCaption = async (e) => {
    try {
      e.preventDefault();
      await editPostInHomePage(postId, caption);
      setIsClick((prev) => !prev);
      toast.success("Edit post success");
      onClose();
    } catch (error) {
      toast.error(error.response?.data.message);
    }
  };

  return (
    <>
      <div className="z-5 fixed bg-black inset-0 opacity-65"></div>
      <div className="z-10 fixed inset-0">
        <div className="flex  items-center justify-center min-h-full py-8">
          <div className="bg-white overflow-auto   rounded-xl shadow-[0_0_15px_rgb(0,0,0,0.2)] h-[81vh] w-[37.5vw] flex flex-col">
            <div className="border-b flex  justify-between p-4">
              <button className="font-bold invisible">&#10005;</button>
              <h1 className="text-lg font-semibold">Edit Post</h1>
              <button onClick={onClose} className="font-bold">
                &#10005;
              </button>
            </div>
            <div className="flex flex-col mt-10">
              {/* EDIT Caption */}
              <form onSubmit={handleSaveCaption}>
                <Editform
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
