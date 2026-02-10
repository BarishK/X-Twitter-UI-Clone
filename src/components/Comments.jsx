import { Image } from "@imagekit/next";
import Post from "./Post";

export default function Comments(params) {
  return (
    <div>
      <form className="flex items-center justify-between gap-4 p-4">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            urlEndpoint={process.env.NEXT_PUBLIC_IMAGE_KIT_ENDPOINT}
            src="/public/general/avatar.png"
            alt=""
            fill
            transformation={[{ width: 100, height: 100 }]}
          />
        </div>
        <input
          type="text"
          placeholder="Post your reply"
          className="flex-1 bg-transparent outline-none p-2 text-xl"
        />
        <button className="py-2 px-4 font-bold bg-white text-black rounded-full">
          Reply
        </button>
      </form>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
