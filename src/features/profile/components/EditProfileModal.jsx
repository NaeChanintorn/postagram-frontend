import { toast } from "react-toastify";
import Avatar from "../../../components/Avatar";
import Button from "../../../components/Button";
import useAuth from "../../../hooks/use-auth";
import { useState } from "react";
import { useRef } from "react";
import Loading from "../../../components/Loading";
import EditBio from "./EditBio";
import useProfile from "../hooks/use-profile";

export function EditProfileModal({ onClose }) {
  const { userData, updateUser, updateUserBioContext } = useAuth();
  const { userProfile, setIsClick } = useProfile();
  const [profileImage, setProfileImage] = useState(null);
  const [bio, setBio] = useState(userProfile?.bio || "");
  const [loading, setLoading] = useState(false);
  const imageRef = useRef(null);

  const updateProfileImage = async () => {
    const formData = new FormData();
    formData.append("profileImage", profileImage);
    // setIsClick((prev) => !prev);
    // console.log(profileImage);
    // formData.getAll("profileImage");
    await updateUser(formData);
  };

  const handleSaveProfileImage = async () => {
    try {
      setLoading(true);
      await updateProfileImage(profileImage);
      toast.success("Updated your profile image");
      setIsClick((prev) => !prev);
    } catch (error) {
      toast.error(error.response?.data.message);
    } finally {
      setProfileImage(null);
      setLoading(false);
    }
  };

  const handleSaveBio = async (e) => {
    try {
      e.preventDefault();
      await updateUserBioContext(bio);
      toast.success("Edit bio success");
      setBio("");
      setIsClick((prev) => !prev);
    } catch (error) {
      toast.error(error.response?.data.message);
    }
  };

  return (
    <>
      <div className="z-10 fixed bg-black inset-0 opacity-65"></div>
      <div className="z-50 fixed inset-0">
        <div className="flex items-center justify-center min-h-full py-8">
          <div className="bg-white overflow-auto   rounded-xl shadow-[0_0_15px_rgb(0,0,0,0.2)] h-[81vh] w-[37.5vw] flex flex-col">
            <div className="border-b flex  justify-between p-4">
              <button className="font-bold invisible">&#10005;</button>
              <h1 className="text-lg font-semibold">Edit Profile</h1>
              <button onClick={onClose} className="font-bold">
                &#10005;
              </button>
            </div>
            <div className="flex flex-col mt-10">
              {/* Choose file from local storage */}
              {loading && <Loading />}
              <input
                type="file"
                className="hidden"
                ref={imageRef}
                onChange={(e) => {
                  if (e.target.files[0]) {
                    setProfileImage(e.target.files[0]);
                  }
                }}
              />
              {/* ------------------------------ */}
              {/* EDIT IMAGE */}
              <form>
                {profileImage ? (
                  <div className="flex flex-row justify-around">
                    <div className="flex flex-row gap-5">
                      <div className="flex flex-col justify-center">
                        {
                          <Avatar
                            extendClassName="w-[5rem] h-[5rem]"
                            src={URL.createObjectURL(profileImage)}
                          />
                        }
                      </div>

                      <div className="flex flex-col justify-center">
                        <h1 className="text-base font-semibold">
                          {userData?.userName}
                        </h1>
                        <div className="flex flex-row gap-1">
                          <h1 className="text-sm font-normal">
                            {userData?.firstName}
                          </h1>
                          <h1 className="text-sm font-normal">
                            {userData?.lastName}
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <Button
                        type="button"
                        onClick={handleSaveProfileImage}
                        text="Save"
                        extendClassName="w-[6vw]"
                      />
                      <Button
                        type="button"
                        onClick={() => {
                          setProfileImage(null);
                          imageRef.current.value = "";
                        }}
                        text="Cancel"
                        extendClassName="w-[6vw]"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-row justify-around">
                    <div className="flex flex-row gap-5">
                      <div className="flex flex-col justify-center">
                        <Avatar
                          extendClassName="w-[5rem] h-[5rem]"
                          src={userData?.profileImage}
                        />
                      </div>

                      <div className="flex flex-col justify-center">
                        <h1 className="text-base font-semibold">
                          {userData?.userName}
                        </h1>
                        <div className="flex flex-row gap-1">
                          <h1 className="text-sm font-normal">
                            {userData?.firstName}
                          </h1>
                          <h1 className="text-sm font-normal">
                            {userData?.lastName}
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <Button
                        type="button"
                        onClick={() => imageRef.current.click()}
                        text="Change photo"
                        extendClassName="w-[6vw]"
                      />
                    </div>
                  </div>
                )}
              </form>
              {/* ----------------------------------- */}

              {/* EDIT Bio */}
              <form onSubmit={handleSaveBio}>
                <EditBio value={bio} onChange={(e) => setBio(e.target.value)} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
