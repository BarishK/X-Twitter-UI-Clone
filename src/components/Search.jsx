import { Image } from "@imagekit/next";

export default function Search() {
  return (
    <div className="bg-inputGray py-2 px-4 flex items-center gap-4 rounded-full">
      <Image
        urlEndpoint={process.env.NEXT_PUBLIC_IMAGE_KIT_ENDPOINT}
        src="public/icons/explore.svg"
        alt=""
        width={16}
        height={16}
      />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent outline-none placeholder:text-textGray"
      />
    </div>
  );
}
