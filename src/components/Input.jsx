export default function Input({
  type,
  placeholder,
  value,
  onChange,
  name,
  text,
  errorMsg,
}) {
  return (
    <>
      {!value ? (
        <label className="text-sm border border-gray-300 rounded-sm px-2 py-2.5 w-[20vw] h-[6vh] relative">
          <span className="text-[0.6rem] text-gray-300 absolute top-0 hidden">
            {text}
          </span>
          <input
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            className={
              "text-[0.8rem] rounded-sm w-[19vw] focus:outline-none focus:border-gray-400"
            }
          />
          {errorMsg ? (
            <small className="text-red-600 absolute top-3 right-2">
              {errorMsg}
            </small>
          ) : null}
        </label>
      ) : (
        <label className="relative text-sm border border-gray-500 rounded-sm px-2 py-5 w-[20vw] h-[6vh] ">
          <span className="text-[0.6rem] text-gray-400 absolute top-0">
            {text}
          </span>
          <input
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            className={
              "text-[0.7rem] rounded-sm w-[19vw] absolute top-4 focus:outline-none"
            }
          />
        </label>
      )}
    </>
  );
}
