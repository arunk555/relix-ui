export default function Avatar({ src, size = 40, alt = "avatar" }) {
  return (
    <img
      src={src || "/images/placeholder.png"}
      alt={alt}
      className={`rounded-full object-cover w-${size} h-${size}`}
    />
  );
}
