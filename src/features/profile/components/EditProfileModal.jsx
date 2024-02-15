import Avatar from "../../../components/Avatar";
import Button from "../../../components/Button";

export function EditProfileModal({
  onClose,
  ProfileImage,
  firstName,
  lastName,
  userName,
}) {
  return (
    <>
      <div className="fixed bg-black inset-0 opacity-65"></div>
      <div className="fixed inset-0">
        <div className="flex  items-center justify-center min-h-full py-8">
          <div className="bg-white  rounded-xl shadow-[0_0_15px_rgb(0,0,0,0.2)] h-[81vh] w-[37.5vw] flex flex-col">
            <div className="border-b flex  justify-between p-4">
              <button className="font-bold invisible">&#10005;</button>
              <h1 className="text-lg font-semibold">Edit Profile</h1>
              <button onClick={onClose} className="font-bold">
                &#10005;
              </button>
            </div>
            <div className="flex flex-col mt-10">
              <div className="flex flex-row justify-around">
                <div className="flex flex-row gap-5">
                  <div className="flex flex-col justify-center">
                    <Avatar extendClassName="w-[5rem] h-[5rem]" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h1 className="text-base font-semibold">{userName}</h1>
                    <div className="flex flex-row gap-1">
                      <h1 className="text-sm font-normal">{firstName}</h1>
                      <h1 className="text-sm font-normal">{lastName}</h1>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <Button text="Change photo" extendClassName="w-[6vw]" />
                </div>
              </div>
              <div className="mt-10 w-[12.8vw] flex justify-center">
                <h1 className="text-xl font-semibold">Bio</h1>
              </div>
              <div className="flex justify-center">
                <div className="flex justify-center mt-5 w-[70%] h-[30vh]">
                  <textarea
                    className="w-full outline outline-1 rounded-lg flex p-5 resize-none"
                    type="text"
                    maxLength="250"
                  />
                </div>
              </div>
              <div className="flex flex-row justify-around gap-14 w-full mt-8">
                <Button text="Save" extendClassName="w-[6vw] invisible" />
                <Button text="Save" extendClassName="w-[6vw]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
