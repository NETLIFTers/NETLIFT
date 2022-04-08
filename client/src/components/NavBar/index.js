import React from "react";
import { NavLink as Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCalendarDays,
  faPlus,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const linkDefault = "flex flex-col items-center";
  return (
    <>
      <nav className="bg-nl-lightblue h-73 flex justify-center text-nl-darkblue sticky bottom inset-x-0 bottom-0">
        <div id="links" className="justify-center flex space-x-10 pt-3">
          <Link
            to="/"
            className={({ isActive }) =>
              isActive ? linkDefault + " text-nl-navblue" : linkDefault
            }
          >
            <FontAwesomeIcon className="w-8 h-8" icon={faHouse} />
            <p className="text-xs pt-1">Home</p>
          </Link>
          <Link
            to="create"
            className={({ isActive }) =>
              isActive ? linkDefault + " text-nl-navblue" : linkDefault
            }
          >
            <FontAwesomeIcon className="w-8 h-8" icon={faPlus} />
            <p className="text-xs pt-1">Create</p>
          </Link>
          <Link
            to="history"
            className={({ isActive }) =>
              isActive ? linkDefault + " text-nl-navblue" : linkDefault
            }
          >
            <FontAwesomeIcon className="w-8 h-8 " icon={faCalendarDays} />
            <p className="text-xs pt-1">History</p>
          </Link>
          <Link
            to="settings"
            className={({ isActive }) =>
              isActive ? linkDefault + " text-nl-navblue" : linkDefault
            }
          >
            <FontAwesomeIcon className="w-8 h-8" icon={faGear} />
            <p className="text-xs pt-1">Settings</p>
          </Link>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
