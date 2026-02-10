import Feed from "@/components/Feed";
import Share from "@/components/Share";
import Link from "next/link";

const Homepage = () => {
  return (
    <div>
      <div className="flex justify-around text-textGray font-bold border-b-[1px] border-borderGray px-4 pt-4">
        <Link
          className="pb-3 flex items-center border-b-4 border-iconBlue"
          href={"/"}
        >
          For you
        </Link>
        <Link className="pb-3 flex items-center" href={"/"}>
          following
        </Link>
      </div>
      <Share />
      <Feed />
    </div>
  );
};

export default Homepage;
