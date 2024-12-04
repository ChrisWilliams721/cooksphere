import Link from "next/link";
import Image from "next/image";
import React from "react";
import MobileMenu from "./MobileMenu";

function Navbar() {
  return (
    <div className=" h-24 flex items-center justify-between">
      {/* LEFT */}
      <div className="">
        <Link href="/" className="text-2xl font-bold">
          Cooksphere
        </Link>
      </div>
      {/* CENTER */}
      <div className="hidden md:flex">
        {/* LINKS */}
        <div className="">
          <Link href="/" className="flex gap-2"> 
          <Image src="/home.png" alt="logo" width={16} height={16} />
          <span>Home</span>
          </Link>
          <Link href="/" className="flex gap-2"> 
          <Image src="/home.png" alt="logo" width={16} height={16} />
          <span>Friends</span>
          </Link>
          
        </div>
      </div>
      {/* RIGHT */}
      <div className="">
        <MobileMenu />
      </div>
    </div>
  );
}

export default Navbar;
