import { toast } from "react-toastify";
import useAuth from "../../../hooks/use-auth";
import { useState } from "react";
import Editform from "./Editform";
import usePost from "../hooks/use-post";

export function EditPostModal({ onClose }) {
  const { userData } = useAuth();
  const { editPostInHomePage } = usePost();
  const [caption, setCaption] = useState(userData?.caption);

  // console.log(userData);

  const handleSaveCaption = async (e) => {
    try {
      e.preventDefault();
      await editPostInHomePage(postId, caption);
      toast.success("Edit post success");
    } catch (error) {
      toast.error(error.response?.data.message);
    }
  };

  return (
    <>
      <div className="fixed bg-black inset-0 opacity-65"></div>
      <div className="fixed inset-0">
        <div className="flex  items-center justify-center min-h-full py-8">
          <div className="bg-white  rounded-xl shadow-[0_0_15px_rgb(0,0,0,0.2)] h-[81vh] w-[37.5vw] flex flex-col">
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
