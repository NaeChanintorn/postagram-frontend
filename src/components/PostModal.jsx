export default function PostModal() {
  return (
    <>
      <div className="z-5 fixed bg-black inset-0 opacity-65"></div>
      <div className="z-10 fixed inset-0">
        <div className="flex  items-center justify-center min-h-full py-8">
          <div className="bg-white  rounded-xl shadow-[0_0_15px_rgb(0,0,0,0.2)] h-[81vh] w-[37.5vw] flex flex-col">
            <div className="border-b flex  justify-between p-4">
              <button className="font-bold invisible">&#10005;</button>
              <h1 className="text-lg font-semibold">Create new post</h1>
              <button onClick={onClose} className="font-bold">
                &#10005;
              </button>
            </div>
            <input
              type="file"
              className="hidden"
              ref={fileRef}
              onChange={(e) => {
                if (e.target.files[0]) {
                  setFile(e.target.files[0]);
                }
              }}
            />
            <form className="h-[80vh]">
              {file ? (
                <div className="flex flex-col justify-center items-center gap-10 ">
                  <div className="h-[55vh] w-[37.5vw] bg-gray-300 flex items-center justify-center">
                    {file.name.endsWith("mp4" || "MPEG-4") ? (
                      <video
                        className="w-full h-full"
                        src={URL.createObjectURL(file)}
                      />
                    ) : (
                      <img
                        className="w-full h-full"
                        src={URL.createObjectURL(file)}
                      />
                    )}
                  </div>
                  <div className="w-4/5 -m-1">
                    <input
                      placeholder="Caption"
                      type="text"
                      className="w-full border border-gray-500 p-1 rounded-lg focus:outline-none"
                      value={caption}
                      onChange={(e) => setCaption(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-row justify-center w-3/5 gap-24">
                    <Button
                      onClick={() => {
                        setFile(null);
                        fileRef.current.value = "";
                      }}
                      extendClassName="w-[10vw]"
                      text="Cancel"
                    />
                    <Button
                      onClick={handleSubmit}
                      type="button"
                      extendClassName="w-[10vw]"
                      text="Post"
                    />
                  </div>
                </div>
              ) : (
                <div className="overflow-auto flex flex-col items-center justify-center h-full gap-6">
                  <PhotoIcon />
                  <h1 className="text-xl font-normal">
                    Drag photos and videos here
                  </h1>
                  <div>
                    <Button
                      type="button"
                      text="Select from computer"
                      extendClassName="w-full p-5"
                      onClick={() => fileRef.current.click()}
                    />
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
