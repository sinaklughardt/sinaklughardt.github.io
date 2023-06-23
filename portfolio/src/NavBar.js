import { NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Background from "./cards/background";

export default function NavBar() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/')
        navigate(0)
    }
    return (
        <>
        <nav className="text-gray-500 bg-gray-100">
        <div className="flex flex-wrap justify-between mx-auto p-4">
            <button
            onClick={handleClick}>
            <span className="self-center text-2xl hover:text-gray-600">Sinaverse</span>
            </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
          <li>
              <Link
                to="https://gitlab.com/sinaklughardt"
                className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0"
                aria-current="page"
              >
            <img
              className="w-8 h8 rounded-full"
              src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLcwmLNBMgp-FHKpBsfoxdvnT7mSXKlT-onj-JQRuM&s"}
              alt="gitlab"
            />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.linkedin.com/in/sinaklughardt/"
                className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0"
                aria-current="page"
              >
            <img
              className="w-8 h-8 rounded-full"
              src={"https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"}
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
