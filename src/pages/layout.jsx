import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import img from "/logo.webp";

// Icons
import { MdBrightnessHigh, MdPhonelink } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { MdSportsCricket } from "react-icons/md";
import { MdOutlinePhonelink } from "react-icons/md";
import { IoCarSport } from "react-icons/io5";
import { FaGlobeAsia } from "react-icons/fa";
import { RiSidebarUnfoldFill } from "react-icons/ri";
// Icons

export function Layout() {
  const [sidebar, setSidebar] = useState(false);
  const [nightMode, setNightMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const toggleNightMode = () => {
    setNightMode(!nightMode);
  };

  useEffect(() => {
    if (nightMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [nightMode]);

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 backdrop-blur-2xl flex justify-between items-center z-20 px-5 sm:px-7 lg:justify-between lg:mx-0 xl:px-12 xl:justify-around`}
      >
        <div className="flex justify-center items-center">
          <img
            src={img}
            alt=""
            loading="lazy"
            className="w-16 md:w-20 lg:w-24"
          />
          <input
            type="search"
            name="berita"
            id="berita"
            placeholder="Cari berita"
            className="dark:text-[#f5f5f5] focus:outline-none border-2 border-[#246fa4] px-4 py-1 rounded-2xl w-[100%]"
          />
        </div>

        {/* Sidebar */}
        <ul
          className={`flex justify-center items-center gap-10 absolute flex-col top-0 bottom-0 left-0 right-0 w-[60%] h-[100vh] bg-white -z-10 transition-all duration-700 -translate-x-full opacity-0 dark:bg-[#121212] ${
            sidebar ? "translate-x-0 opacity-100" : ""
          } xl:w-[20%]`}
          id="sidebar"
        >
          <li className="flex justify-center items-center gap-3 text-sm ">
            <Link to={"/"} className="flex justify-center items-center gap-1">
              <i className="dark:text-[#f5f5f5]">
                <GoHomeFill />
              </i>{" "}
              <p className="dark:text-[#f5f5f5]">Beranda</p>
            </Link>
          </li>
          <li className="flex justify-center items-center gap-3 text-sm">
            <Link
              to={"/sport"}
              className="flex justify-center items-center gap-1"
            >
              <i className="dark:text-[#f5f5f5]">
                <MdSportsCricket />
              </i>{" "}
              <p className="dark:text-[#f5f5f5]">Blog Sport</p>
            </Link>
          </li>
          <li className="flex justify-center items-center gap-3 text-sm">
            <Link
              to={"/tech"}
              className="flex justify-center items-center gap-1"
            >
              <i className="dark:text-[#f5f5f5]">
                <MdOutlinePhonelink />
              </i>{" "}
              <p className="dark:text-[#f5f5f5]">Blog Teknologi</p>
            </Link>
          </li>
          <li className="flex justify-center items-center gap-3 text-sm">
            <Link
              to={"/otomotif"}
              className="flex justify-center items-center gap-1"
            >
              <i className="dark:text-[#f5f5f5]">
                <IoCarSport />
              </i>{" "}
              <p className="dark:text-[#f5f5f5]">Blog Otomotif</p>
            </Link>
          </li>
          <li className="flex justify-center items-center gap-3 text-sm">
            <Link
              to={"/dunia"}
              className="flex justify-center items-center gap-1"
            >
              <i className="dark:text-[#f5f5f5]">
                <FaGlobeAsia />
              </i>{" "}
              <p className="dark:text-[#f5f5f5]">Blog Dunia</p>
            </Link>
          </li>
        </ul>
        {/* Sidebar */}

        <div className="flex justify-center items-center gap-3">
          <i
            className="cursor-pointer text-3xl dark:text-[#f5f5f5]"
            onClick={toggleSidebar}
          >
            <RiSidebarUnfoldFill />
          </i>
          <div className="nm">
            <button
              aria-label="Change"
              className={`cursor-pointer bg-[#0c8ce9] text-white px-3 py-2 rounded-md ${
                nightMode ? "hidden" : ""
              }`}
              onClick={toggleNightMode}
            >
              <i>
                <FaMoon />
              </i>
            </button>
            <button
              aria-label="Change"
              className={`cursor-pointer bg-[#0c8ce9] text-white px-3 py-2 rounded-md ${
                nightMode ? "" : "hidden"
              }`}
              onClick={toggleNightMode}
            >
              <i>
                <MdBrightnessHigh />
              </i>
            </button>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}
