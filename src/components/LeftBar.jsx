import { Image, ImageKitProvider } from "@imagekit/next";
import Link from "next/link";

const menuList = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "Messages",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "Jobs",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "Communities",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 8,
    name: "Premium",
    link: "/",
    icon: "logo.svg",
  },
  {
    id: 9,
    name: "Profile",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 10,
    name: "More",
    link: "/",
    icon: "more.svg",
  },
];

const LeftBar = () => {
  return (
    <ImageKitProvider urlEndpoint="https://ik.imagekit.io/bn8x8yxgw">
      <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-4">
        {/* Logo Menu Button */}
        <div className="flex flex-col gap-4 text-lg">
          {/* Logo */}
          <Link className="p-2 rounded-full hover:bg-[#181818]" href={"/"}>
            <Image
              src={"/public/icons/logo.svg"}
              alt="logo"
              width={24}
              height={24}
            />
          </Link>
          {/* Menu List */}
          <div className="flex flex-col gap-3">
            {menuList.map((item) => (
              <Link
                className="p-2 rounded-full hover:bg-[#181818] flex items-center gap-4"
                href={item.link}
                key={item.id}
              >
                <Image
                  src={`public/icons/${item.icon}`}
                  alt="item.name"
                  width={24}
                  height={24}
                />
                <span className="hidden xxl:inline">{item.name}</span>
              </Link>
            ))}
          </div>
          {/* Button */}
          <Link
            className="xxl:hidden bg-white text-black rounded-full w-12 h-12 flex items-center justify-center"
            href={"/compose/post"}
          >
            <Image
              src={"public/icons/post.svg"}
              alt="new post"
              width={24}
              height={24}
            />
          </Link>
          <Link
            className="text-center hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20"
            href={"/compose/post"}
          >
            Post
          </Link>
        </div>
        {/* User */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 relative rounded-full overflow-hidden">
              <Link href={"/barishk"}>
                <Image src={"public/general/avatar.png"} alt="new post" fill />
              </Link>
            </div>
            <div className="hidden xxl:flex flex-col">
              <span className="font-bold">Barish Korkmaz</span>
              <span className="text-sm text-textGray">@barishk</span>
            </div>
          </div>
          <div className="hidden xxl:block cursor-pointer font-bold">...</div>
        </div>
      </div>
    </ImageKitProvider>
  );
};

export default LeftBar;
