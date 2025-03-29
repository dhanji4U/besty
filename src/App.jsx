import { useState } from "react";

import Sidebar from "./components/Sidebar";
import {
  IconEdit,
  IconFilter,
  IconHome,
  IconLighter,
  IconSearch,
  IconSparkles,
  IconUser,
  IconX
} from "@tabler/icons-react/dist/esm/tabler-icons-react";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";

// const Modal = ({ isOpen, onClose, children }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex
//                       items-center justify-center
//                       bg-black bg-opacity-50">
//       <div className="bg-white rounded-lg
//                           shadow-lg p-6 max-w-md
//                           w-full relative">
//         <button
//           className="absolute top-2 right-2
//                              text-gray-500 hover:text-gray-700"
//           onClick={onClose}
//         >
//           &#x2715; {/* Close button */}
//         </button>
//         {children}
//       </div>
//     </div>
//   );
// };

// const AlertModal = ({ isOpen, onClose }) => {
//   return (
//     <Modal isOpen={isOpen} onClose={onClose}>
//       <h2 className="text-lg font-bold">Alert</h2>
//       <p className="text-gray-700">
//         This is an important message.
//       </p>
//       <button
//         className="mt-4 px-4 py-2
//                          bg-blue-500 text-white
//                          rounded-lg"
//         onClick={onClose}
//       >
//         OK
//       </button>
//     </Modal>
//   );
// };

function App() {
  const [activeTab, setActiveTab] = useState("Employees Skills & Experience");
  const [isModalOpen, setModalOpen] = useState(false);
  const [open, setOpen] = useState(false);

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
            <button className='bg-blue-600 py-2 px-3 rounded-3xl text-white cursor-pointer'>Add Employee</button>
          </div>

          <div className='rounded p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 '>
            <div className='flex items-center rounded py-4 px-2 bg-gray-100 dark:bg-gray-900'>
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
            <button className='bg-white py-2 px-3 rounded border-2 border-gray-300 flex justify-center cursor-pointer'>
              <IconFilter />
              Filter
            </button>
          </div>

          <div className='relative overflow-x-auto'>
            <table className='border-separate border-spacing-y-3 rounded rtl:text-right text-left text-sm w-full'>
              <thead className='text-xs text-white bg-blue-500 '>
                <tr>
                  <th scope='col' className='px-6 py-3 rounded-s-lg'>
                    Team
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Employee Name
                  </th>
                  <th scope='col' className='px-6 py-3 rounded-e-lg'>
                    Employee Skills & Experience
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className='bg-white'>
                  <td scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap align-top'>
                    <button className='cursor-pointer' onClick={() => setOpen(true)}>
                      Team A
                    </button>
                    <Dialog open={open} onClose={setOpen} className='relative z-10'>
                      <DialogBackdrop
                        transition
                        className='fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in'
                      />

                      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
                        <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
                          <DialogPanel
                            transition
                            className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95'
                          >
                            <div className='bg-white px-4 pt-5 pb-2 sm:p-6 sm:pb-2'>
                              <div className='flex items-center justify-between'>
                                <span className="font-bold">Team</span>
                                <button className="text-gray-500 cursor-pointer " onClick={() => setOpen(false)}>
                                  <IconX />
                                </button>
                              </div>
                              <div className='flex items-center bg-white py-2 px-1 mt-4 rounded-3xl border-2 border-gray-300'>
                                <IconSearch className='mx-2' />
                                <input className='bg-white outline-none' type='text' name='Search' placeholder='Search...' />
                              </div>
                              <div className='p-2 mt-2 grid gap-2'>
                                <div>
                                  <input type='radio' name='team_1' id='team_1' />
                                  <label htmlFor='team_1' className='ml-2'>
                                    Team 1
                                  </label>
                                </div>

                                <div>
                                  <input type='radio' name='team_1' id='team_1' />
                                  <label htmlFor='team_1' className='ml-2'>
                                    Team 2
                                  </label>
                                </div>

                                <div>
                                  <input type='radio' name='team_1' id='team_1' />
                                  <label htmlFor='team_1' className='ml-2'>
                                    Team 3
                                  </label>
                                </div>
                              </div>
                              <div className='bg-gray-50 pb-3 mt-3 flex justify-between items-center gap-2'>
                                <button
                                  type='button'
                                  data-autofocus
                                  onClick={() => setOpen(false)}
                                  className='cursor-pointer mt-3 inline-flex w-full justify-center rounded-full bg-white px-7 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto'
                                >
                                  Add New
                                </button>
                                <button
                                  type='button'
                                  onClick={() => setOpen(false)}
                                  className='cursor-pointer inline-flex w-full justify-center rounded-full bg-blue-600 px-7 py-2 text-sm font-semibold text-white shadow-xs hover:bg-gray-400 sm:ml-3 sm:w-auto'
                                >
                                  Show Result
                                </button>
                              </div>
                            </div>
                          </DialogPanel>
                        </div>
                      </div>
                    </Dialog>
                  </td>
                  <td className='px-6 py-4 align-top'>
                    <li className='cursor-pointer flex items-center mt-auto'>
                      <div className='rounded-full bg-blue-200 p-2'>
                        <IconUser />
                      </div>
                      <div className='flex flex-col pl-2'>
                        <span className='font-semibold text-blue-700'>Dev User</span>
                        <div className='flex'>
                          <span className='text-sm font-bold'>Admin</span>
                          <span className='pl-1 text-gray-500'>/External Supplier</span>
                        </div>
                      </div>
                    </li>
                  </td>
                  <td className='px-6 py-4'>
                    <textarea
                      name='skills'
                      id='skills'
                      rows='5'
                      className='border-2 border-gray-300 rounded w-full p-2'
                      placeholder="Provide details about the employee's background: Profession, Years of Experience..."
                    ></textarea>
                    <div className='flex justify-start mt-2 gap-2'>
                      <button className='bg-blue-700 py-1 px-6 rounded-3xl text-white cursor-pointer'>Save</button>
                      <button className='border-2 border-gray-300 py-1 px-4 rounded-3xl cursor-pointer'>Cancel</button>
                    </div>
                  </td>
                </tr>

                <tr className='bg-white'>
                  <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                    <button className='cursor-pointer' onClick={() => setOpen(true)}>
                      Team B
                    </button>
                  </th>
                  <td className='px-6 py-4 align-top'>
                    <li className='cursor-pointer flex items-center mt-auto'>
                      <div className='rounded-full bg-blue-200 p-2'>
                        <IconUser />
                      </div>
                      <div className='flex flex-col pl-2'>
                        <span className='font-semibold text-blue-700'>Dev User</span>
                        <div className='flex'>
                          <span className='text-sm font-bold'>Admin</span>
                          <span className='pl-1 text-gray-500'>/External Supplier</span>
                        </div>
                      </div>
                    </li>
                  </td>
                  <td className='px-6 py-4'>
                    <div className='flex justify-between items-center grid-rows-1'>
                      <div className='w-[50%]'>Lorem ipsum dolor sit amet,</div>
                      <div>
                        <IconEdit color="orange" />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className='bg-white'>
                  <td scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap align-top'>
                    <button className='cursor-pointer' onClick={() => setOpen(true)}>
                      Team C
                    </button>
                  </td>
                  <td className='px-6 py-4 align-top'>
                    <li className='cursor-pointer flex items-center mt-auto'>
                      <div className='rounded-full bg-blue-200 p-2'>
                        <IconUser />
                      </div>
                      <div className='flex flex-col pl-2'>
                        <span className='font-semibold text-blue-700'>Dev User</span>
                        <div className='flex'>
                          <span className='text-sm font-bold'>Admin</span>
                          <span className='pl-1 text-gray-500'>/External Supplier</span>
                        </div>
                      </div>
                    </li>
                  </td>
                  <td className='px-6 py-4'>
                    <textarea name='skills' id='skills' rows='5' className='border-2 border-gray-300 rounded w-full p-2' placeholder="Provide details about the employee's background: Profession, Years of Experience..."></textarea>
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
