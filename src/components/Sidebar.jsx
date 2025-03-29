import React, { useState } from "react";
import { IconBell, IconBeta, IconBuilding, IconBusinessplan, IconHome, IconNotification, IconTypography, IconUser, IconUsers } from "@tabler/icons-react/dist/esm/tabler-icons-react";
import { IconArrowLeft } from '@tabler/icons-react';
// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className={`h-screen bg-blue-600 text-white p-4 flex flex-col transition-all duration-300 ${isCollapsed ? "w-20" : "w-64"}`}>
            {/* Header Section */}
            <div className={`flex items-center  space-x-2 ${isCollapsed ? "justify-center" : ""}`}>
                <IconBeta />
                {!isCollapsed && <h1 className="text-2xl font-bold">BESTY</h1>}
            </div>

            {/* Navigation Menu */}
            <ul className="mt-6 space-y-4 flex-1">
                <a href="#" className="hover:bg-gray-700 p-2 rounded-3xl cursor-pointer flex px-4 py-2">
                    <IconHome /> {!isCollapsed && <span className="pl-2">Home</span>}
                </a>
                <a href="#" className="hover:bg-gray-700 p-2 rounded-3xl cursor-pointer flex px-4 py-2">
                    <IconTypography /> {!isCollapsed && <span className="pl-2">Templates</span>}
                </a>
                <a href="#" className="hover:bg-gray-700 p-2 rounded-3xl cursor-pointer flex px-4 py-2">
                    <IconUsers /> {!isCollapsed && <span className="pl-2">Customers</span>}
                </a>
                <a href="#" className="bg-gray-700 p-2 rounded-3xl cursor-pointer flex px-4 py-2">
                    <IconUser /> {!isCollapsed && <span className="pl-2">Employees</span>}
                </a>
                <a href="#" className="hover:bg-gray-700 p-2 rounded-3xl cursor-pointer flex px-4 py-2">
                    <IconBuilding /> {!isCollapsed && <span className="pl-2">My Business Settings</span>}
                </a>
            </ul>

            {/* Collapse Button */}
            <button
                className="bg-gray-400 p-2 mx-auto mb-4 -mr-5 rounded-s-3xl"
                onClick={() => setIsCollapsed(!isCollapsed)}
            >
                <IconArrowLeft className={`transition-transform ${isCollapsed ? "rotate-180" : ""}`} />
            </button>

            {/* Notification */}
            <a href="#" className="hover:bg-gray-700 p-2 rounded-3xl cursor-pointer flex px-4 py-2">
                <IconBell />
                {!isCollapsed && (
                    <span className="flex justify-between space-x-2 w-full">
                        <span className="pl-2">Notification</span>
                        <span className="bg-gray-700 px-2 py-0.5 rounded text-sm">10</span>
                    </span>
                )}
            </a>

            {/* User Profile */}
            <hr className="text-gray-400 my-2" />
            <a href="#" className={`rounded-3xl cursor-pointer flex items-center py-2 mt-auto ${isCollapsed ? "justify-center" : "justify-start"}`}>
                <img src="/sample.jpg" alt="User" className="w-10 h-10 rounded-full" />
                {!isCollapsed && (
                    <div className="flex flex-col pl-2">
                        <span className="font-semibold">Dev User</span>
                        <span className="text-sm text-gray-300">Admin</span>
                    </div>
                )}
            </a>
        </div>
    );
};


export default Sidebar;
