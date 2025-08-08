import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../lib/url";
import { Link } from "react-router-dom";

export function PageTech() {
  const [tech, setTech] = useState([]);
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

  useEffect(() => {
    (async () => {
      try {
        const api = await axios.get(`${url()}cnbc/tech/`);
        const response = await api.data;
        setTech(response.data.posts);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className="mt-32">
      <div className="flex justify-center items-center " id="pageTech">
        <div className="xl:mx-10 relative flex justify-center items-start flex-wrap flex-col xl:flex-row gap-7">
          {tech.map((list) => (
            <div
              key={list.pubDate}
              className="flex justify-center items-center flex-col relative w-10/12 xl:w-3/12"
            >
              <img
                src={`${list.thumbnail}`}
                alt="Image 1"
                className="w-10/12 rounded-3xl"
                loading="lazy"
              />
              <div className="flex justify-center items-center flex-col gap-5 w-10/12 mt-10 lg:flex lg:justify-start lg:items-start">
                <h1 className="font-bold text-center lg:text-start">
                  {list.title}
                </h1>
                <p className="text-center text-sm lg:text-start">
                  {list.description}
                </p>
                <a
                  href={list.link}
                  className="bg-blue-800 px-3 py-2 text-white rounded-md"
                >
                  Baca Berita..
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="mt-28 bg-[#181818] lg:top-[270rem] xl:top-[280rem] xl:rounded-tr-4xl xl:rounded-tl-4xl xl:mx-3"
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
                <h4 className="font-bold text-2xl mb-3 text-blue-100">
                  Berita List
                </h4>
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
                <h4 className="font-bold text-2xl mb-3 text-blue-100">
                  Blog Tema
                </h4>
                <ul>
                  <li className="text-white font-light">
                    <Link to={"/sport"}>Blog Sport</Link>
                  </li>
                  <li className="text-white font-light">
                    <Link to={"/tech"} href="">
                      Blog Teknologi
                    </Link>
                  </li>
                  <li className="text-white font-light">
                    <Link to={"/otomotif"}>Blog Otomotif</Link>
                  </li>
                  <li className="text-white font-light">
                    <Link to={"/global"}>Blog Dunia</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <span className="w-[85%] h-0.5 bg-[#282828]"></span>
          <div className="w-[85%] flex justify-between items-center">
            <h3 className="text-white">Naitzz &copy; 2024 - 2025</h3>
            <div className=" flex justify-center items-center gap-5 text-2xl text-white">
              <i class="fa-brands fa-github"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-facebook"></i>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
