export default function Button({ text }) {
  return (
    <>
      <button className="w-[20vw] bg-blue-500 text-white text-center text-sm py-2 rounded-lg mt-1">
        {text}
      </button>
    </>
  );
}
