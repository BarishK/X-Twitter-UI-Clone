import { Image } from "@imagekit/next";

export default function PostInfo() {
  return (
    <div className="cursor-pointer w-4 h-4 relative">
      <Image
        urlEndpoint="https://ik.imagekit.io/bn8x8yxgw/"
        src="/public/icons/infoMore.svg"
        alt="postinfo"
        width={16}
        height={16}
      />
    </div>
  );
}
