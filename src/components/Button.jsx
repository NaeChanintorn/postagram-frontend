export default function Button({ text, extendClassName, onClick, type }) {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={`w-[20vw] bg-blue-500 text-white text-center text-sm py-2 rounded-lg mt-1 ${extendClassName}`}
      >
        {text}
      </button>
    </>
  );
}
