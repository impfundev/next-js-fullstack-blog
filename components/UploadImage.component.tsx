import { HandleUpload } from "../lib/types";

export default function UploadImage({ onChange }: HandleUpload) {
  return (
    <div className="bg-foreground-100 p-4 rounded-2xl">
      <input
        id="image"
        type="file"
        name="image"
        accept="image/*"
        onChange={onChange}
        className="w-full h-20"
      />
    </div>
  );
}
