export default function Input({
  type,
  placeholder,
  name,
  value,
  onChange,
  error,
}) {
  return (
    <>
      <input
        className={`w-[500px] py-3 px-4 bg-slate-100 rounded hover:ring-1 hover:ring-gray-600 outline-slate-500 border-solid border-2 ${
          error ? "border-red-700" : "border-slate-300"
        } `}
        type={type || "text"}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      <p
        className={`${
          error ? "peer-invalid:visible text-red-700 font-light" : ""
        }`}
      >
        {error}
      </p>
    </>
  );
}
