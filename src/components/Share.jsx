"use client";

import { shareAction } from "@/actions";
import { Image, ImageKitProvider } from "@imagekit/next";
import { useState } from "react";
import NextImage from "next/image";
import ImageEditor from "./ImageEditor";

export default function Share() {
  const [media, setMedia] = useState(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [settings, setSettings] = useState({
    type: "original" | "wide" | "square",
    sensitive: false,
  });

  const handleMediaChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  };

  const previewURL = media ? URL.createObjectURL(media) : null;

  return (
    <ImageKitProvider urlEndpoint="https://ik.imagekit.io/bn8x8yxgw">
      <form
        className="p-4 flex gap-4"
        action={(formData) => shareAction(formData, settings)}
      >
        {/* AVATAR */}
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image src="/public/general/avatar.png" alt="avatar" fill />
        </div>
        {/* OTHERS */}
        <div className="flex-1 flex flex-col gap-4">
          <input
            type="text"
            name="desc"
            placeholder="what is happening"
            className="bg-transparent outline-none placeholder:text-textGray text-xl"
          />
          {/* PREVIEW IMAGE */}
          {previewURL && (
            <div className="relative rounded-xl overflow-hidden">
              <NextImage
                src={previewURL}
                alt=""
                width={600}
                height={600}
                className={`w-full ${settings.type === "original" ? "h-full object-contain" : settings.type === "square" ? "aspect-square object-cover" : "aspect-video object-cover"}`}
              />
              <div
                className="absolute top-2 left-2 bg-black bg-opacity-50 text-white px-4 rounded-full font-bold text-sm cursor-pointer"
                onClick={() => {
                  setIsEditorOpen(true);
                }}
              >
                Edit
              </div>
            </div>
          )}
          {isEditorOpen && previewURL && (
            <ImageEditor
              onClose={() => setIsEditorOpen(false)}
              previewURL={previewURL}
              settings={settings}
              setSettings={setSettings}
            />
          )}
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex gap-4 flex-wrap">
              <input
                type="file"
                name="file"
                onChange={handleMediaChange}
                className="hidden"
                id="file"
              />
              <label htmlFor="file">
                <Image
                  src="/public/icons/image.svg"
                  alt="image"
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
              </label>
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
            <button className="bg-white text-black font-bold rounded-full py-2 px-4">
              Post
            </button>
          </div>
        </div>
      </form>
    </ImageKitProvider>
  );
}
