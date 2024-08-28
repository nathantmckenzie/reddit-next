"use client";

import TopNavBar from "../../(components)/TopNavBar";
import Image from "next/image";
import SideBar from "../../(components)/SideBar";
import redditImage from "../../assets/reddit.png";
import DropDownMenu from "@/app/(components)/DropDownMenu";

const SubredditPage = ({ params }: { params: { subreddit: string } }) => {
  const { subreddit } = params;

  return (
    <div>
      <TopNavBar />
      <SideBar />
      <div className="pt-[50px] pl-[300px] flex flex-row items-end">
        <div>
          <Image
            className="w-[50px] h-[50px] border rounded-[50%] mr-3"
            src={redditImage}
            alt="reddit"
          />
          <h1>r/{subreddit}</h1>
        </div>
        <div>
          <DropDownMenu />
        </div>
      </div>
    </div>
  );
};

export default SubredditPage;
