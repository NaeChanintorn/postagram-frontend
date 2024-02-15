import { PhotoIcon } from "../icons/Icons";
import Avatar from "./Avatar";
import Button from "./Button";

export function CreateModal({ onClose }) {
  return (
    <>
      <div className="fixed bg-black inset-0 opacity-65"></div>
      <div className="fixed inset-0">
        <div className="flex  items-center justify-center min-h-full py-8">
          <div className="bg-white  rounded-xl shadow-[0_0_15px_rgb(0,0,0,0.2)] h-[81vh] w-[37.5vw] flex flex-col">
            <div className="border-b flex  justify-between p-4">
              <button className="font-bold invisible">&#10005;</button>
              <h1 className="text-lg font-semibold">Create new post</h1>
              <button onClick={onClose} className="font-bold">
                &#10005;
              </button>
            </div>
            <div className="overflow-auto flex flex-col items-center justify-center h-full gap-6">
              <PhotoIcon />
              <h1 className="text-xl font-normal">
                Drag photos and videos here
              </h1>
              <div>
                <Button
                  text="Select from computer"
                  extendClassName="w-full p-5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
