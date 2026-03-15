export default function Input({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  className = "",
  ...props
}) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-gray-600 text-sm">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border rounded px-3 py-2 focus:ring focus:ring-blue-300 ${className}`}
        {...props}
      />
    </div>
  );
}
