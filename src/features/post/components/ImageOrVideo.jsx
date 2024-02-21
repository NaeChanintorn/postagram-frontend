export default function ImageOrVideo({ imageorvideo }) {
  const checkImageOrVideo = imageorvideo.endsWith("mp4" || "MPEG-4");
  // console.log(imageorvideo);
  return (
    <div className="h-[50vh] ">
      {checkImageOrVideo ? (
        <video className="h-full w-full" src={imageorvideo} />
      ) : (
        <img className="h-full w-full" src={imageorvideo} alt="image" />
      )}
    </div>
  );
}
