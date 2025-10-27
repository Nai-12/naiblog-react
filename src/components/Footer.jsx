// import img from "/logo.png";
import axios from "axios";
import { useState, useEffect } from "react";
import { url } from "../lib/url";
import { Link } from "react-router-dom";

export function Footer() {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const api = await axios.get(url());
      const data = await api.data;
      setList(data.endpoints);
    })();
  }, []);

  function upperCaseFirstLetter(txt) {
    return txt.charAt(0).toUpperCase() + txt.slice(1);
  }
  return (
    <>
      <div
        className="absolute top-920 left-0 right-0 bg-[#181818] lg:top-1080 xl:top-1120 xl:rounded-tr-4xl xl:rounded-tl-4xl xl:mx-3"
        id="footer"
      >
        <footer className="flex justify-between items-start pl-10 flex-col gap-10 py-10 xl:items-center xl:px-10 xl:flex-col">
          <div className="flex justify-between items-start pl-10 flex-col gap-10 py-10 xl:items-center xl:px-32 xl:flex-row">
            <div className="flex justify-start items-start flex-col gap-5 flex-1/5">
              <h1 className="font-bold text-6xl text-white">Naiblog</h1>
              <p className="text-md w-8/12 text-white font-light">
                Website ini menyediakan source berita dari berbagai sumber yaitu
                Antara, CNN, Merdeka, dan masih banyak lagi. Kalian dapat
                membaca berita dengan mudah tanpa harus bolak balik sana sini
                hanya dengan 1 website yang menghubungkan semuanya menjadi 1
              </p>
              <a
                href="https://saweria.co/NabitzzBot"
                className="bg-blue-800 text-white py-2 px-7 rounded-md"
              >
                Traktir kopi :D
              </a>
            </div>
            <div className="flex justify-start items-start flex-col gap-12 xl:justify-center xl:flex-row">
              <div>
                <h1 className="font-bold text-2xl mb-3 text-blue-100">
                  Berita List
                </h1>
                <ul>
                  {list.map((lst) => (
                    <li key={lst.name}>
                      <p className="text-white font-light">
                        {upperCaseFirstLetter(lst.name)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h1 className="font-bold text-2xl mb-3 text-blue-100">
                  Blog Tema
                </h1>
                <ul>
                  <li className="text-white font-light">
                    <Link to={"/sport"}>Blog Sport</Link>
                  </li>
                  <li className="text-white font-light">
                    <Link to={"/tech"}>Blog Teknologi</Link>
                  </li>
                  <li>
                    <a href="" className="text-white font-light">
                      Blog Otomotif
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-white font-light">
                      Blog Dunia
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <span className="w-[85%] h-0.5 bg-[#282828]"></span>
          <div className="w-[85%] flex justify-between items-center">
            <p className="text-white">Naitzz &copy; 2024 - 2025</p>
            <div className=" flex justify-center items-center gap-5 text-2xl text-white">
              <a href="https://github.com/Nai-12">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="https://www.instagram.com/naitzz__/">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="https://web.facebook.com/profile.php?id=100088202771445">
                <i class="fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
