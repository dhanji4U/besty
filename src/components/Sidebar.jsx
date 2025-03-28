import React from "react";
import { IconBell, IconBeta, IconBuilding, IconBusinessplan, IconHome, IconNotification, IconTypography, IconUser, IconUsers } from "@tabler/icons-react/dist/esm/tabler-icons-react";
import { IconArrowLeft } from '@tabler/icons-react';

const Sidebar = () => {
    return (
        <div className="w-64 h-screen bg-blue-600 text-white p-4 flex flex-col">
            {/* Header Section */}
            <div className="flex items-center space-x-2">
                <IconBeta />
                <h1 className="text-2xl font-bold">BESTY</h1>
            </div>

            {/* Navigation Menu */}
            <ul className="mt-6 space-y-4 flex-1">
                <li className="hover:bg-gray-700 p-2 rounded-3xl cursor-pointer flex px-4 py-2">
                    <IconHome /> <span className="pl-2">Home</span>
                </li>
                <li className="hover:bg-gray-700 p-2 rounded-3xl cursor-pointer flex px-4 py-2">
                    <IconTypography /> <span className="pl-2">Templates</span>
                </li>
                <li className="hover:bg-gray-700 p-2 rounded-3xl cursor-pointer flex px-4 py-2">
                    <IconUsers /> <span className="pl-2">Customers</span>
                </li>
                <li className="bg-gray-700 p-2 rounded-3xl cursor-pointer flex px-4 py-2">
                    <IconUser /> <span className="pl-2">Employees</span>
                </li>
                <li className="hover:bg-gray-700 p-2 rounded-3xl cursor-pointer flex px-4 py-2">
                    <IconBuilding /> <span className="pl-2">My Business Settings</span>
                </li>
            </ul>

            <li className="hover:bg-gray-700 p-2 rounded-3xl cursor-pointer flex px-4 py-2">
                <IconBell />
                <span className="flex justify-between space-x-2 w-full">
                    <span className="pl-2">Notification</span>
                    <span className="bg-gray-700 px-2 py-0.5 rounded text-sm">10</span>
                </span>
            </li>

            {/* User Profile Section (Fixed at Bottom) */}
            <hr className="text-gray-400 my-2" />
            <li className="p-2 rounded-3xl cursor-pointer flex items-center px-4 py-2 mt-auto">
                <img src="/sample.jpg" alt="User" className="w-10 h-10 rounded-full" />
                <div className="flex flex-col pl-2">
                    <span className="font-semibold">Dev User</span>
                    <span className="text-sm text-gray-300">Admin</span>
                </div>
            </li>
        </div>

    );
};

export default Sidebar;
