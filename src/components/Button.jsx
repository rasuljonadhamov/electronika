const Button = ({ title, className, icon, id, isActive, onClick }) => {
  const defaultBgColor = "bg-primary";
  const defaultTextColor = "text-white";
  const activeBgColor = "bg-secondary";
  const activeTextColor = "text-black";

  const bgColor = isActive ? defaultBgColor : activeBgColor;
  const textColor = isActive ? defaultTextColor : activeTextColor;

  return (
    <div
      className={`flex ${bgColor} ${textColor} hover:bg-opacity-60 hover:scale-95 transition-all cursor-pointer py-2 px-8 lg:px-12 rounded-sm shadow-lg ${className}`}
      onClick={() => onClick(id)}
    >
      {icon && <img src={icon} alt="icon" className="w-7 h-8 " />}
      <button className={`font-bold ${className}`}>{title}</button>
    </div>
  );
};

export default Button;
