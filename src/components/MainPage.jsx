import React, { Suspense } from "react";
import { Logolist } from "./LogoList";
import Cnbc from "./news_list/cnbc";
import Antara from "./news_list/antara";
import { Footer } from "./Footer";
import About from "./About";

function MainPage() {
  return (
    <>
      <div
        id="main"
        className="absolute right-0 left-0 bottom-0 top-10 flex justify-center items-center"
      >
        <div className="relative flex justify-center items-center flex-col gap-7 xl:items-start xl:ml-36 z-10">
          <div className="flex justify-start items-center bg-[rgba(12_140_233)]/50 py-1 px-3.5 rounded-full gap-3 border-3 border-[#246fa4]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={17}
              height={17}
              viewBox="0 0 512 512"
              className="hidden sm:block lg:block"
            >
              <rect
                width={96}
                height={96}
                x={96}
                y={112}
                fill="none"
                rx={16}
                ry={16}
              ></rect>
              <path
                fill="#fff"
                d="M468 112h-52v304a32 32 0 0 0 32 32a32 32 0 0 0 32-32V124a12 12 0 0 0-12-12"
              ></path>
              <path
                fill="#fff"
                d="M431.15 477.75A64.11 64.11 0 0 1 384 416V44a12 12 0 0 0-12-12H44a12 12 0 0 0-12 12v380a56 56 0 0 0 56 56h342.85a1.14 1.14 0 0 0 .3-2.25M96 208v-96h96v96Zm224 192H96v-32h224Zm0-64H96v-32h224Zm0-64H96v-32h224Zm0-64h-96v-32h96Zm0-64h-96v-32h96Z"
              ></path>
            </svg>
            <p className="text-[10px] sm:text-xs">Semua Berita Menjadi Satu</p>
          </div>
          <h1 className="text-3xl font-bold w-full max-w-10/12 text-center md:max-w-10/12 md:text-6xl xl:text-start xl:text-6xl xl:w-7/12 xl:max-w-[700px]">
            Sumber <span className="text-blue-400">Berita</span> Anda Dengan 1{" "}
            <span className="text-blue-400">Website</span>
          </h1>
          <p className="info w-[90%] text-center text-[10px] sm:text-lg xl:text-start xl:w-6/12 xl:max-w-5/12 xl:text-sm">
            Website ini menyediakan source berita dari berbagai sumber yaitu
            Antara, CNN, Merdeka, dan masih banyak lagi. Kalian dapat membaca
            berita dengan mudah tanpa harus bolak balik sana sini hanya dengan 1
            website yang menghubungkan semuanya menjadi 1
          </p>
          <div>
            <a
              href="#reading"
              className="bg-blue-400 text-white py-1.5 px-3 rounded-lg text-[10px] sm:py-3 sm:px-7 sm:text-xs xl:py-3 xl:px-7"
            >
              Baca Sekarang..
            </a>
          </div>
        </div>
      </div>

      <div
        className="absolute top-[50rem] left-0 right-0 flex justify-center items-center px-10 xl:px-32 md:top-[60rem]"
        id="scroll"
      >
        <span className="h-[0.3px] w-full bg-black"></span>
        <p className="absolute text-[12px] bg-white px-3 py-1.5 flex justify-center items-center gap-1 border-2 border-black rounded-full md:text-[15px] xl:text-[16px]">
          Scroll Kebawah{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <path
              fill="#000"
              d="M11.47 16.278a.75.75 0 0 0 1.06 0l2.25-2.249a.75.75 0 0 0-1.06-1.06L12 14.686l-1.72-1.719a.75.75 0 1 0-1.06 1.061zM12 9.055a.8.8 0 1 1 0-1.6a.8.8 0 0 1 0 1.6m-.8 2.016a.8.8 0 1 0 1.6 0a.8.8 0 0 0-1.6 0"
            ></path>
            <path
              fill="#000"
              fillRule="evenodd"
              d="M12 2.001a7.5 7.5 0 0 0-7.5 7.5v5a7.5 7.5 0 0 0 15 0v-5a7.5 7.5 0 0 0-7.5-7.5m-6 7.5a6 6 0 1 1 12 0v5a6 6 0 0 1-12 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </p>
      </div>

      <About />
      <Logolist />
      <div
        className="absolute top-508 left-0 right-0 flex justify-center items-center sm:top-560 md:top-540 lg:top-680 xl:top-720"
        id="reading"
      >
        <Antara />
        <Cnbc />
        <div className="absolute -bottom-368 left-0 right-0 flex justify-center items-center">
          <a href="" className="py-2 px-7 text-black">
            Baca Berita Lainya
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 1024 1024"
          >
            <path
              fill="#000"
              d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312z"
            ></path>
          </svg>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default MainPage;
