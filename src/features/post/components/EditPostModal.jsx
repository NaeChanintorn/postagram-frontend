import { toast } from "react-toastify";
import Avatar from "../../../components/Avatar";
import Button from "../../../components/Button";
import useAuth from "../../../hooks/use-auth";
import { useState } from "react";
import { useRef } from "react";
import Loading from "../../../components/Loading";
import EditBio from "../../profile/components/EditBio";
import Editform from "./Editform";

export function EditPostModal({ onClose }) {
  const { userData } = useAuth();
  //   const [bio, setBio] = useState(userData?.bio);

  //   const handleSaveBio = async (e) => {
  //     try {
  //       e.preventDefault();
  //       await updateUserBioContext(bio);
  //       toast.success("Edit bio success");
  //     } catch (error) {
  //       toast.error(error.response?.data.message);
  //     }
  //   };

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
              <form>
                <Editform />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
