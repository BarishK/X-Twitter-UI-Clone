"use client";

import { Image, ImageKitProvider } from "@imagekit/next";
import { useRouter } from "next/navigation";

const PostModal = () => {
  const router = useRouter();

  const closeModal = () => {
    router.back();
  };

  return (
    <ImageKitProvider urlEndpoint={process.env.NEXT_PUBLIC_IMAGE_KIT_ENDPOINT}>
      <div className="absolute w-screen h-screen top-0 left-0 z-20 bg-[#293139a6] flex justify-center ">
        <div className="py-4 px-8 rounded-xl bg-black w-[600px] h-max mt-12">
          {/* TOP */}
          <div className="flex justify-between items-center">
            <div className="cursor-pointer" onClick={closeModal}>
              X
            </div>
            <div className="text-iconBlue font-bold">Drafts</div>
          </div>
          {/* CENTER */}
          <div className="py-8 flex gap-4">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="public/general/avatar.png"
                alt=""
                fill
                transformation={[{ width: 500, height: 500 }]}
              />
            </div>
            <input
              className="flex-1 bg-transparent outline-none text-lg"
              type="text"
              placeholder="What is happening?!"
            />
          </div>
          {/* BOTTOM */}
          <div className="flex items-center justify-between gap-4 flex-wrap border-t border-borderGray">
            <div className="flex gap-4 flex-wrap">
              <Image
                src="/public/icons/image.svg"
                alt="gif"
                width={20}
                height={20}
                className="cursor-pointer"
              />
              <Image
                src="/public/icons/gif.svg"
                alt="gif"
                width={20}
                height={20}
                className="cursor-pointer"
              />
              <Image
                src="/public/icons/poll.svg"
                alt="poll"
                width={20}
                height={20}
                className="cursor-pointer"
              />
              <Image
                src="/public/icons/emoji.svg"
                alt="emoji"
                width={20}
                height={20}
                className="cursor-pointer"
              />
              <Image
                src="/public/icons/schedule.svg"
                alt="schedule"
                width={20}
                height={20}
                className="cursor-pointer"
              />
              <Image
                src="/public/icons/location.svg"
                alt="location"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </div>
            <button className="py-2 px-5 text-black bg-white rounded-full font-bold">
              Post
            </button>
          </div>
        </div>
      </div>
    </ImageKitProvider>
  );
};

export default PostModal;
