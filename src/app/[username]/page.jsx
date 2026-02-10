import Feed from "@/components/Feed";
import { Image } from "@imagekit/next";
import Link from "next/link";

export default function UserPage() {
  return (
    <div>
      {/* PROFILE TITLE */}
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
        <h1 className="font-bold text-lg">BarishK</h1>
      </div>
      {/* INFO */}
      <div>
        {/* COVER AND AVATAR */}
        <div className="relative w-full">
          <div className="w-full aspect-[3/1]">
            <Image
              urlEndpoint={process.env.NEXT_PUBLIC_IMAGE_KIT_ENDPOINT}
              src="public/general/cover.jpg"
              alt=""
              width={600}
              height={200}
            />
          </div>
          <div className="w-1/6 aspect-square rounded-full overflow-hidden border-4 bg-black-200 absolute left-4 -translate-y-1/2">
            <Image
              urlEndpoint={process.env.NEXT_PUBLIC_IMAGE_KIT_ENDPOINT}
              src="public/general/avatar.png"
              alt=""
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-end gap-2 p-2">
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image
              urlEndpoint={process.env.NEXT_PUBLIC_IMAGE_KIT_ENDPOINT}
              src="public/icons/more.svg"
              alt=""
              width={20}
              height={20}
            />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image
              urlEndpoint={process.env.NEXT_PUBLIC_IMAGE_KIT_ENDPOINT}
              src="public/icons/explore.svg"
              alt=""
              width={20}
              height={20}
            />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <Image
              urlEndpoint={process.env.NEXT_PUBLIC_IMAGE_KIT_ENDPOINT}
              src="public/icons/message.svg"
              alt=""
              width={20}
              height={20}
            />
          </div>
          <button className="py-2 px-4 bg-white text-black font-bold rounded-full">
            Follow
          </button>
        </div>
        {/* USER DETAILS */}
        <div className="p-4 flex flex-col gap-2">
          {/* USERNAME */}
          <div>
            <h1 className="text-2xl font-bold">Barish K</h1>
            <span className="text-textGray text-sm">@barishk</span>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus,
            repellat.
          </p>
          {/* JOB LOCATION DATE */}
          <div className="flex gap-4 text-textGray text-[15px]">
            <div className="flex items-center gap-2">
              <Image
                urlEndpoint={process.env.NEXT_PUBLIC_IMAGE_KIT_ENDPOINT}
                src="public/icons/userLocation.svg"
                alt=""
                width={20}
                height={20}
              />
              <span>Baku / Azerbaijan</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                urlEndpoint={process.env.NEXT_PUBLIC_IMAGE_KIT_ENDPOINT}
                src="public/icons/date.svg"
                alt=""
                width={20}
                height={20}
              />
              <span>25.07.2001</span>
            </div>
          </div>
          {/* FOLLOWINGS FOLLOWERS */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold">100</span>
              <span className="text-textGray text-[15px]">Followers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">5235</span>
              <span className="text-textGray text-[15px]">Followings</span>
            </div>
          </div>
        </div>
      </div>
      {/* FEED */}
      <Feed />
    </div>
  );
}
