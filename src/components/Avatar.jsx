import profileImage from "../assets/profile.png";

export default function Avatar({ extendClassName, src }) {
  return (
    <div
      className={`bg-gray-300 w-[1.5rem] h-[1.5rem] rounded-full overflow-hidden mx-auto flex  ${extendClassName}`}
    >
      <img className="w-full h-full" src={src || profileImage} alt="user" />
    </div>
  );
}
