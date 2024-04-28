const Input = ({ type = "text", placeholder, className }) => {
  return (
    <div className={className}>
      <input
        type={type}
        placeholder={placeholder}
        className={`border border-gray-300 p-2 w-52 focus:border-blue-500 focus:outline-none focus:ring-blue-200 focus:ring-2 duration-200 rounded-md ${className}`}
      />
    </div>
  );
};

export default Input;
