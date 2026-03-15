import { useDropzone } from "react-dropzone";

export default function ImageDropzone({ onUpload }) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    onDrop: (files) => onUpload(files),
  });

  return (
    <div
      {...getRootProps()}
      className="border-dashed border-2 p-6 text-center cursor-pointer hover:border-blue-600"
    >
      <input {...getInputProps()} />
      <p>Drag & drop images here, or click to select</p>
    </div>
  );
}
