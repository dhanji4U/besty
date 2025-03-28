import { useState } from "react";

import Sidebar from "./components/Sidebar";
import { IconEdit, IconFilter, IconLighter, IconSearch, IconSparkles, IconUser } from "@tabler/icons-react/dist/esm/tabler-icons-react";

function App() {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1'>
        <div className='py-4 px-6 h-screen bg-gray-100 shadow'>
          <h2 className='text-2xl font-semibold mb-3'>Employees</h2>
          <div className='flex mt-3 space-x-6 border-b-2 border-gray-200'>
            {["Employees Cost", "Indirect Salary Cost", "Employees Skills & Experience"].map(tab => (
              <div key={tab} className='relative'>
                <button className='pb-2' onClick={() => setActiveTab(tab)}>
                  {tab}
                </button>
                {activeTab === tab && <div className='absolute left-0 w-full border-b-2 border-orange-500'></div>}
              </div>
            ))}
          </div>
          <div className='flex justify-between items-center py-7'>
            <h2 className='font-bold'>Employees Skills & Experience</h2>
            <button className='bg-blue-600 py-2 px-3 rounded-3xl text-white'>Add Employee</button>
          </div>

          <div class='rounded p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 '>
            <div class='flex items-center rounded py-4 px-2 bg-gray-100 dark:bg-gray-900'>
              <IconSparkles color='orange' />
              <span className='pl-2'>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries fzor previewing layouts and visual
                mockups.
              </span>
            </div>
          </div>

          <div className='flex justify-between items-center py-5'>
            <div className='flex items-center bg-white py-2 px-1 rounded-3xl border-2 border-gray-300'>
              <IconSearch className='mx-2' />
              <input className='bg-white outline-none' type='text' name='Search' placeholder='Search...' />
            </div>
            <button className='bg-white py-2 px-3 rounded border-2 border-gray-300 flex justify-center'>
              <IconFilter />
              Filter
            </button>
          </div>



          <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right  rounded">
              <thead class="text-xs text-white bg-blue-500 ">
                <tr>
                  <th scope="col" class="px-6 py-3 rounded-s-lg">
                    Team
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Employee Name
                  </th>
                  <th scope="col" class="px-6 py-3 rounded-e-lg">
                    Employee Skills & Experience
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b border-gray-200 border-2 rounded-s-lg">
                  <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap align-top">
                    Team A
                  </td>
                  <td class="px-6 py-4 align-top">
                    <li className="cursor-pointer flex items-center mt-auto">
                      <div className="rounded-full bg-blue-200 p-2">
                        <IconUser />

                      </div>
                      <div className="flex flex-col pl-2">
                        <span className="font-semibold text-blue-700">Dev User</span>
                        <div className="flex">
                          <span className="text-sm font-bold">Admin</span>
                          <span className="pl-1 text-gray-500">/External Supplier</span>
                        </div>
                      </div>
                    </li>
                  </td>
                  <td class="px-6 py-4">
                    <textarea name="skills" id="skills" rows="5" className="border-2 border-gray-300 rounded w-full p-2" placeholder="Enter the details of skills"></textarea>
                    <div className="flex gap-2">
                      <button className="bg-blue-700 py-1 px-6 rounded-3xl text-white cursor-pointer">Save</button>
                      <button className="border-2 border-gray-300 py-1 px-4 rounded-3xl cursor-pointer">Cancel</button>
                    </div>
                  </td>
                </tr>
                <tr class="bg-white border-b border-gray-200 border-2 rounded-s-lg">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Team B
                  </th>
                  <td class="px-6 py-4 align-top">
                    <li className="cursor-pointer flex items-center mt-auto">
                      <div className="rounded-full bg-blue-200 p-2">
                        <IconUser />

                      </div>
                      <div className="flex flex-col pl-2">
                        <span className="font-semibold text-blue-700">Dev User</span>
                        <div className="flex">
                          <span className="text-sm font-bold">Admin</span>
                          <span className="pl-1 text-gray-500">/External Supplier</span>
                        </div>
                      </div>
                    </li>
                  </td>
                  <td class="px-6 py-4">
                    <div className="flex grid-rows-1">
                      <div className="w-[50%]">
                        Lorem ipsum dolor sit amet,
                      </div>
                      <div><IconEdit /></div>
                    </div>
                  </td>
                </tr>
                <tr class="bg-white border-b border-gray-200 border-2 rounded-s-lg">
                  <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap align-top">
                    Team A
                  </td>
                  <td class="px-6 py-4 align-top">
                    <li className="cursor-pointer flex items-center mt-auto">
                      <div className="rounded-full bg-blue-200 p-2">
                        <IconUser />

                      </div>
                      <div className="flex flex-col pl-2">
                        <span className="font-semibold text-blue-700">Dev User</span>
                        <div className="flex">
                          <span className="text-sm font-bold">Admin</span>
                          <span className="pl-1 text-gray-500">/External Supplier</span>
                        </div>
                      </div>
                    </li>
                  </td>
                  <td class="px-6 py-4">
                    <textarea name="skills" id="skills" rows="5" className="border-2 border-gray-300 rounded w-full p-2" placeholder="Enter the details of skills"></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
