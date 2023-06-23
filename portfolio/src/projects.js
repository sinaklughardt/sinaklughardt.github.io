import { Fragment, useRef, useState} from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";


export default function Project() {
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
              src={require("./images/planet1.png")}
              alt="motivation-planet"
            />
            projects
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
                      My Projects
                    </Dialog.Title>
            <div className="border border-gray-200 hover:border-gray-300">
            <p className="font-bold p-2">Whimzee</p>
            <div className=" p-1 lg:h-auto flex-none lg:rounded-t-none lg:rounded-l text-center overflow-hidden p-5">
            <Link
            to="https://whimz.gitlab.io/module3-project-gamma/"
            >
            <img
              className="border shadow"
              src={require("./images/whimzee_page.jpeg")}
              alt="project"
            />
            </Link>

            </div>
            <div className="flex flex-col text-black p-3">

                <p>Whimzee is a user-friendly shop website that facilitates the buying and selling of new and pre-owned items. The platform offers a range of features to enhance the user experience, including user registration, login, and logout functionalities. Once logged in, users have the ability to create their own shop and manage their listings</p>
                <br></br>
                <p className="font-bold">Skills: </p>
             <p className="">FastAPI, PostgreSQL, React.js, Python, JavaScript, Tailwind</p>
                <Link
            to="https://whimz.gitlab.io/module3-project-gamma/"
            >
            <p className="font-bold text-center text-green-700 animate-pulse">Check it out</p>
            </Link>

            </div>

            </div>
            <div className="border border-gray-200 hover:border-gray-300">
            <p className="font-bold p-2">CarCar</p>
            <div className=" p-1 lg:h-auto flex-none lg:rounded-t-none lg:rounded-l text-center overflow-hidden p-5">
            <Link
            to="https://gitlab.com/sinaklughardt/carcar"
            >
            <img
              className="border shadow"
              src={require("./images/whimzee_page.jpeg")}
              alt="project"
            />
            </Link>

            </div>
            <div className="flex flex-col text-black p-3">

                <p>The CarCar Management System is a powerful software application designed to streamline customer
                    experiences and employee interactions in auto dealerships.
                    It enables customers to browse and purchase automobiles while also facilitating service appointments
                    with technicians. Salesmen can efficiently sell vehicles, while technicians can handle service requests.
                    CarCar revolutionizes dealership operations, enhancing efficiency and customer satisfaction.</p>
                <br></br>
                <p className="font-bold">Skills: </p>
             <p className="">Django, Python, Microservices, React.js, JavaScript, Bootstrap</p>
                <Link
            to="https://gitlab.com/sinaklughardt/carcar"
            >
            <p className="font-bold text-center text-green-700 animate-pulse">Check out the repo</p>
            </Link>

            </div>
            </div>
            </div>


                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-black text-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
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
