import { Image } from "@imagekit/next";
import PostInfo from "./PostInfo";
import PostInteractions from "./PostInteractions";
import { imagekit } from "@/utils";
import Link from "next/link";

export default async function Post({ type }) {
  const getFileDetails = async (fileId) => {
    return new Promise((resolve, reject) => {
      imagekit.getFileDetails(fileId, function (error, result) {
        if (error) reject(error);
        else resolve(result);
      });
    });
  };

  const fileDetails = await getFileDetails("6989c4f25c7cd75eb834e8df");

  return (
    <div className="p-4 border-y-[1px] border-borderGray">
      {/* POST TYPE */}
      <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path
            fill="#71767b"
            d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
          />
        </svg>
        <span>Trump reposted</span>
      </div>
      {/* POST CONTENT */}
      {/* <div className="flex gap-4"> */}
      <div className={`flex gap-4 ${type === "status" && "flex-col"}`}>
        {/* AVATAR */}
        <div
          className={`${type === "status" ? "hidden" : "relative w-10 h-10"}`}
        >
          <Image
            className="rounded-full"
            urlEndpoint="https://ik.imagekit.io/bn8x8yxgw"
            src="/public/general/avatar.png"
            alt=""
            fill
            transformation={[{ width: 100, height: 100 }]}
          />
        </div>
        {/* CONTENT */}
        <div className="flex-1 flex flex-col gap-2">
          <div className="w-full flex justify-between">
            <Link href={"/username"} className="flex gap-4">
              <div
                className={`${type !== "status" ? "hidden" : "relative w-10 h-10"}`}
              >
                <Image
                  className="rounded-full"
                  urlEndpoint="https://ik.imagekit.io/bn8x8yxgw"
                  src="/public/general/avatar.png"
                  alt=""
                  fill
                  transformation={[{ width: 100, height: 100 }]}
                />
              </div>
              <div
                className={`"flex items-center gap-2 flex-wrap" ${type === "status" && "flex-col gap-0 !items-start"}`}
              >
                <h1 className="text-md font-bold">Barish Korkmaz</h1>
                <span
                  className={`"text-textGray" ${type === "status" && "text-sm text-textGray"}`}
                >
                  @barishK
                </span>
                {type !== "status" && (
                  <span className="text-textGray">1 day ago</span>
                )}
              </div>
            </Link>
            {/* TOP */}

            <PostInfo />
          </div>
          {/* TEXT & MEDIA */}
          <Link href={"/username/status/1"}>
            <p className={`${type === "status" && "text-lg"}`}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In natus
              porro sunt dolorum quia et sequi recusandae ratione, molestiae
              repellendus.
            </p>
          </Link>

          {fileDetails && (
            <Image
              urlEndpoint="https://ik.imagekit.io/bn8x8yxgw/"
              src={fileDetails.filePath}
              alt=""
              width={fileDetails.width}
              height={fileDetails.height}
              className={fileDetails.customMetadata?.sensitive ? "blur-lg" : ""}
            />
          )}
          {type === "status" && (
            <span className="text-textGray text-sm">
              11:28 PM - Dec 12, 2025
            </span>
          )}
          <PostInteractions />
        </div>
      </div>
    </div>
  );
}
