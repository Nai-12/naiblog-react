import { useState, Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import ListBerita from "../components/listBerita";
import img from "/logo.webp";

export function Layout() {
  const [listView, setListView] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [nightMode, setNightMode] = useState(false);

  const toggleView = () => {
    setListView(!listView);
  };

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const toggleNightMode = () => {
    setNightMode(!nightMode);
  };

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 backdrop-blur-2xl flex justify-between items-center z-20 px-5 sm:px-7 lg:justify-between lg:mx-0 xl:px-12 xl:justify-around`}
      >
        <img src={img} alt="" loading="lazy" className="w-16 md:w-20 lg:w-24" />
        <ul className="hidden justify-around items-center-safe gap-10 relative lg:flex lg:gap-4 xl:gap-10">
          <li className="flex justify-center items-center gap-3 text-sm">
            <Link to={"/"}>
              <i className="fa-solid fa-house"></i> Beranda
            </Link>
          </li>
          <li className="flex justify-center items-center gap-3 text-sm">
            <Link to={"/sport"}>
              <i className="fa-solid fa-baseball-bat-ball"></i> Blog Sport
            </Link>
          </li>
          <li className="flex justify-center items-center gap-3 text-sm">
            <Link to={"/tech"}>
              <i className="fa-solid fa-microchip"></i> Blog Teknologi
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="flex justify-center items-center gap-3 text-sm"
            >
              <i className="fa-solid fa-car"></i> Blog Otomotif
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex justify-center items-center gap-3 text-sm"
            >
              <i className="fa-solid fa-earth-asia"></i> Blog Dunia
            </a>
          </li>
          <button
            onClick={toggleView}
            className="flex justify-center items-center gap-3 text-sm cursor-pointer relative after:content-[''] after:absolute after:top-0 after:-right-2 after:bg-red-500 after:w-3 after:h-3 after:rounded-full after:animate-ping before:content-[''] before:absolute before:top-0 before:-right-2 before:bg-red-500 before:w-3 before:h-3 before:rounded-full"
          >
            <i className="fa-solid fa-tv"></i> Berita
            <ListBerita isOpen={listView} />
          </button>
        </ul>

        {/* Sidebar */}
        <ul
          className={`flex justify-center items-center gap-10 absolute flex-col top-0 bottom-0 left-0 right-0 w-[70%] h-[100vh] bg-white -z-10 transition-all duration-700 -translate-x-full opacity-0 ${
            sidebar ? "translate-x-0 opacity-100" : ""
          } xl:hidden`}
          id="sidebar"
        >
          <li className="flex justify-center items-center gap-3 text-sm">
            <Link to={"/"}>
              <i className="fa-solid fa-house"></i> Beranda
            </Link>
          </li>
          <li className="flex justify-center items-center gap-3 text-sm">
            <Link to={"/sport"}>
              <i className="fa-solid fa-baseball-bat-ball"></i> Blog Sport
            </Link>
          </li>
          <li className="flex justify-center items-center gap-3 text-sm">
            <Link to={"/tech"}>
              <i className="fa-solid fa-microchip"></i> Blog Teknologi
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="flex justify-center items-center gap-3 text-sm"
            >
              <i className="fa-solid fa-car"></i> Blog Otomotif
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex justify-center items-center gap-3 text-sm"
            >
              <i className="fa-solid fa-earth-asia"></i> Blog Dunia
            </a>
          </li>
          <button
            onClick={toggleView}
            className="flex justify-center items-center gap-3 text-sm cursor-pointer relative after:content-[''] after:absolute after:top-0 after:-right-2 after:bg-red-500 after:w-3 after:h-3 after:rounded-full after:animate-ping before:content-[''] before:absolute before:top-0 before:-right-2 before:bg-red-500 before:w-3 before:h-3 before:rounded-full"
          >
            <i className="fa-solid fa-tv"></i> Berita
            <ListBerita isOpen={listView} />
          </button>
        </ul>
        {/* Sidebar */}

        <div className="flex justify-center items-center gap-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={26}
            height={26}
            viewBox="0 0 24 24"
            className="cursor-pointer lg:hidden"
            onClick={toggleSidebar}
            id="burger"
          >
            <path
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeWidth={1.5}
              d="M4 7h3m13 0h-9m9 10h-3M4 17h9m-9-5h16"
            ></path>
          </svg>
          <div className="nm">
            <button
              className={`cursor-pointer bg-[#0c8ce9] text-white px-3 py-2 rounded-md ${
                nightMode ? "hidden" : ""
              }`}
              onClick={toggleNightMode}
            >
              <i className="fa-solid fa-moon"></i>
            </button>
            <button
              className={`cursor-pointer bg-[#0c8ce9] text-white px-3 py-2 rounded-md ${
                nightMode ? "" : "hidden"
              }`}
              onClick={toggleNightMode}
            >
              <i className="fa-solid fa-sun"></i>
            </button>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}
