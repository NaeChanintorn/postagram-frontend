export default function Avatar({ profileImage, extendClassName }) {
  return (
    <div
      className={`bg-gray-300 w-[1.5rem] h-[1.5rem] rounded-full ${extendClassName}`}
    >
      <div>{profileImage}</div>
    </div>
  );
}
