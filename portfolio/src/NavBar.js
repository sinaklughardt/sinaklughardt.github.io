import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <>
        <nav className="bg-black z-10">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4 text-white">
            <Link
            to="/">
            <span className="self-center text-2xl font-semibold text-white absolute z-10 hover:text-violet-100">Sinaverse</span>
            </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-black md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black">
          <li>
              <Link
                to="https://gitlab.com/sinaklughardt"
                className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 absolute z-10"
                aria-current="page"
              >
            <img
              className="w-8 h8 rounded-full bg-black hover:w-9 hover:h-9"
              src={"https://seeklogo.com/images/G/gitlab-logo-FAA48EFD02-seeklogo.com.png"}
              alt="linkedin"
            />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.linkedin.com/in/sinaklughardt/"
                className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-black"
                aria-current="page"
              >
            <img
              className="w-8 h-8 rounded-full bg-black hover:w-9 hover:h-9"
              src={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png"}
              alt="linkedin"
            />
              </Link>
            </li>
          </ul>
        </div>
        </div>
      </nav>
        </>
    );
};
