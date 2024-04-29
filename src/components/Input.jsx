const Input = ({
  type = "text",
  placeholder,
  className,
  error = "",
  label = false,
  value,
  onChange,
  name,
}) => {
  return (
    <div className={className}>
      {label && <label className="block mb-2">{label} </label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        className={`border  border-gray-300 p-2 w-52 focus:border-blue-500 focus:outline-none focus:ring-blue-200 focus:ring-2 duration-200 rounded-md ${className}`}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default Input;
