import { Logolist } from "./LogoList";
import Cnbc from "./news_list/cnbc";
import Antara from "./news_list/antara";
import { Footer } from "./Footer";
import About from "./About";



export function MainPage() {
  return (
    <div className="bg-gray-950">
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
            <p className="text-[10px] sm:text-xs dark:text-[#f5f5f5]">
              Semua Berita Menjadi Satu
            </p>
          </div>
          <h1 className="text-3xl font-bold w-full max-w-10/12 text-center md:max-w-10/12 md:text-6xl xl:text-start xl:text-6xl xl:w-7/12 xl:max-w-[700px] dark:text-[#f5f5f5]">
            Sumber <span className="text-blue-400">Berita</span> Anda Dengan 1{" "}
            <span className="text-blue-400">Website</span>
          </h1>
          <p className="info w-[90%] text-center text-[10px] sm:text-lg xl:text-start xl:w-6/12 xl:max-w-5/12 xl:text-sm dark:text-[#f5f5f5]">
            Website ini menyediakan source berita dari berbagai sumber yaitu
            Antara, CNN, Merdeka, dan masih banyak lagi. Kalian dapat membaca
            berita dengan mudah tanpa harus bolak balik sana sini hanya dengan 1
            website yang menghubungkan semuanya menjadi 1
          </p>
          <div>
            <a
              href="#reading"
              className="bg-[#246fa4] text-white py-1.5 px-3 rounded-lg text-[10px] sm:py-3 sm:px-7 sm:text-xs xl:py-3 xl:px-7"
            >
              Baca Sekarang..
            </a>
          </div>
        </div>
      </div>

      <div
        className="absolute top-200 left-0 right-0 flex justify-center items-center px-10 xl:px-32 md:top-240"
        id="scroll"
      >
        <span className="h-[0.3px] w-full bg-black"></span>
        <p className="absolute text-[12px] bg-white px-3 py-1.5 flex justify-center items-center gap-1 border-2 border-black rounded-full md:text-[15px] xl:text-[16px] dark:bg-[#121212] dark:text-[#f5f5f5] dark:border-[#f5f5f5]">
          Scroll Kebawah{" "}
          <i className="fa-solid fa-angles-down dark:text-[#f5f5f5]"></i>
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
          <a href="" className="py-2 px-7 text-black dark:text-[#f5f5f5]">
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
    </div>
  );
}
