import Profile from "./Profile";
import PostProfile from "./PostProfile";
import { useState } from "react";
import useProfile from "../hooks/use-profile";

export default function MainProfile() {
  const [editModal, setEditModal] = useState(false);

  // const { userProfile } = useProfile();
  // console.log(userProfile);

  return (
    <div className="flex flex-row">
      <div className=" w-[21.2vw] invisible">invicible</div>
      <div className="flex flex-col items-center w-full mt-9">
        <Profile
          onClick={() => setEditModal(true)}
          onClose={() => setEditModal(false)}
          editModal={editModal}
        />
        <div className="max-w-[48vw]">
          <hr className="w-full my-16" />
          <PostProfile />
        </div>
      </div>
    </div>
  );
}
