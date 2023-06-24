import { Fragment, useRef, useState} from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";


export default function Background() {
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
              src={require("./images/planet2.png")}
              alt="motivation-planet"
            />
            background
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
                      My Background
                    </Dialog.Title>
            <div className="shadow border border-gray-200 hover:border-gray-300">
            <div className="lg:h-auto flex-none lg:rounded-t-none lg:rounded-l text-center overflow-hidden p-5">
            <img
              className=""
              src={require("./images/workbackground.jpeg")}
              alt="education"
            />
            </div>
            <div className="flex flex-col mt-5 text-black p-3">
                <p className="font-bold">Special Needs Supports Specialist</p>
                <br></br>
                <p>Having studied Special Needs Support in Germany, my journey began with a deep passion for assisting individuals with unique challenges. I had the privilege of working closely with blind people with special needs, providing them with the care and support they required. However, I felt a strong desire to broaden my horizons and explore new opportunities. This led me to embark on a new chapter in San Francisco, seeking to expand my understanding and expertise in the field.</p>
                <br></br>
                <p>In San Francisco, I supported a special needs teenager, leading to a transformative experience. I learned American Sign Language (ASL) to establish effective communication, enabling me to fully engage with him and provide the necessary support for his growth and well-being.</p>
                <br></br>
                <p>By merging my passion for technology and dedication to supporting those with special needs, I strive to bridge the gap between accessibility and innovation. Together, let's create a more inclusive world where everyone has equal opportunities to thrive and succeed.</p>
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
