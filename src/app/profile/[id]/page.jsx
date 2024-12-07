import React from "react";
import LeftMenu from "../../components/LeftMenu";
import RightMenu from "../../components/RightMenu";
import Post from "../../components/Post";
import Image from "next/image";

const ProfilePage = () => {
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu />
      </div>

      <div className="lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image
                src="/user-bg.jpg"
                alt="Background"
                fill
                className="rounded-md object-cover"
              />
              <Image
                src="/user-image.jpg"
                alt="Profile"
                width={128}
                height={128}
                className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white object-cover"
              />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">Tony Paul</h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium">123</span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">2.8k</span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">1.3k</span>
                <span className="text-sm">Following</span>
              </div>
            </div>
          </div>
          <Post />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu userID="test" />
      </div>
    </div>
  );
};

export default ProfilePage;
