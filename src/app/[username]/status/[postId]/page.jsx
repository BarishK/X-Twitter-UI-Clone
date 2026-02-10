import Comments from "@/components/Comments";
import Post from "@/components/Post";
import { Image } from "@imagekit/next";
import Link from "next/link";

export default function StatusPage() {
  return (
    <div>
      {/* TOP */}
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-black/75">
        <Link href={"/"}>
          <Image
            urlEndpoint={process.env.NEXT_PUBLIC_IMAGE_KIT_ENDPOINT}
            src="public/icons/back.svg"
            alt=""
            width={24}
            height={24}
          />
        </Link>
        <h1 className="font-bold text-lg">Post</h1>
      </div>
      <Post type="status" />
      <Comments />
    </div>
  );
}
