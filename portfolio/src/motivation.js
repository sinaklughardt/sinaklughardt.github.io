import { Fragment, useRef, useState} from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";


export default function Motivation() {
//   const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);



    return (
        <>
      <button
        onClick={() => setOpen(true)}
        className="bg-white text-black font-sm
         hover:text-gray-700 py-2 px-2 hover:border hover:rounded-full
        rounded-lg m-5"
      >
            <img
              className="w-20 h20"
              src={require("./images/planet4.png")}
              alt="motivation-planet"
            />
            motivation
      </button>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <Dialog.Title className="text-base textxl text-center font-semibold leading-6 text-gray-900 m-5">
                      My Motivation
                    </Dialog.Title>
            <div className="shadow border border-gray-200 hover:border-gray-300">
            <div className="lg:h-auto flex-none lg:rounded-t-none lg:rounded-l text-center overflow-hidden p-5">
            <img
              className=""
              src={"https://images.unsplash.com/photo-1499540633125-484965b60031?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"}
              alt="motivation"
            />
            </div>
            <div className="flex flex-col mt-5 text-black p-3 pt-0">
                <p>I'm a full stack software engineer, fueled by my passion for unleashing the incredible potential of software to transform our world. The thrill of turning ideas into reality through elegant and efficient code brings me immense joy. Whether it's crafting user-friendly interfaces or building robust back-end systems, I love tackling the challenge of creating innovative software solutions.</p>
                <br></br>
                <p>Collaboration is key to my approach. I firmly believe that the best projects are born from diverse perspectives and teamwork. Working with talented individuals inspires me to develop solutions that not only meet technical requirements but also address real-world needs. I thrive in an environment where we freely exchange ideas, embrace challenges, and celebrate our collective achievements.</p>
                <br></br>
                <p>Above all, I'm motivated by making a meaningful impact. Whether it's enhancing user experiences,
                streamlining business processes, or contributing to social causes, I'm passionate about creating software that improves people's lives. With my skills and expertise, I'm committed to driving innovation, efficiency, and positive change through purposeful solutions.</p>

            </div>
            </div>
            </div>

                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-black text-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-600 sm:mt-0 sm:w-auto"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      X
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
    )}
