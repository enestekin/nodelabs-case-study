"use client";

import {
  SearchIcon,
  NotificationsIcon,
  ProfileIcon,
  DownIcon,
} from "@/assets/Icons";
import { userProfileInfo } from "@/hooks/useFinanceActions";

export default function Navbar() {
  const { data, isLoading } = userProfileInfo();
  const user = data?.data;

  return (
    <nav className="flex justify-between items-center mb-[30px]">
      <h1 className="text-[25px] font-semibold">Dashboard</h1>

      <div className="flex gap-[45px] items-center">
        <SearchIcon className="w-6 h-6 text-secondary" />
        <NotificationsIcon className="text-secondary" />
        <button
          type="button"
          className="flex justify-between items-center bg-secondary-bg py-[6px] pl-[7px] pr-[21px] cursor-pointer rounded-full min-w-[215px]"
        >
          {isLoading ? (
            <div className="flex items-center w-full animate-pulse">
              <div className="w-8 h-8 rounded-full bg-gray-300 mr-3"></div>
              <div className="flex-1 h-4 bg-gray-300 rounded"></div>
              <div className="w-3 h-3 bg-gray-300 rounded ml-3"></div>
            </div>
          ) : (
            <>
              <ProfileIcon className="mr-3" />
              <p className="mr-7 text-sm font-semibold">{user?.fullName}</p>
              <DownIcon className="w-[9px] h-[5px]" />
            </>
          )}
        </button>
      </div>
    </nav>
  );
}
