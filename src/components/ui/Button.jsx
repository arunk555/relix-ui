export default function Button({
  children,
  onClick,
  className = "",
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
