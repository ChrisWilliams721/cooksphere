"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from 'react';
import { useUserAuth } from "../_utils/auth-context";

const ProfileCard = () => {
    const router = useRouter();
    const { user } = useUserAuth();

    if (!user) {
        return null; // Prevent rendering if the user is not authenticated
      }

    const navigateToProfile = () => {
        router.push('/profile/id');
    };
    console.log(user);
    return (
        <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6'>
            <div className='h-20 relative'>
                <Image 
                src="/profile-bg.jpg"
                alt=""
                fill
                className="rounded-md object-cover"
                 ></Image>
                <Image 
                src={user.photoURL}
                alt=""
                width={48}
                height={48}
                className="rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"
                 ></Image>
            </div>
            <div className="h-20 flex flex-col gap-2 items-center">
                <span className="font-semibold">{user.email}</span>
                <div className="flex items-center gap-4">
                    <span className="text-xs text-gray-500"></span>
                </div>
                <button onClick={navigateToProfile} className="bg-blue-500 text-white text-xs p-2 rounded-md">My Profile</button>
            </div>
        </div>
    );
};
    

export default ProfileCard
