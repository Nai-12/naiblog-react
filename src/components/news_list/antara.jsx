import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../../lib/url";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Antara() {
  const [antara, setAntara] = useState([]);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    speed: 800,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    nextArrow: (
      <div>
        <div className="next-slick-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 48 48"
          >
            <path
              fill="#398eca"
              stroke="#398eca"
              strokeLinejoin="round"
              strokeWidth={4}
              d="m20 12l12 12l-12 12z"
            ></path>
          </svg>
        </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="next-slick-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 48 48"
          >
            <path
              fill="#398eca"
              stroke="#398eca"
              strokeLinejoin="round"
              strokeWidth={4}
              d="M30 36L18 24l12-12z"
            ></path>
          </svg>
        </div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  useEffect(() => {
    (async () => {
      try {
        const api = await axios.get(`${url()}antara/terbaru/`);
        const response = await api.data;
        setAntara(response.data.posts);
      } catch (e) {
        console.log("Terdapat Error : " + e);
      }
    })();
  });
  return (
    <div className="slider-container">
      <div className="absolute left-7 right-7" id="antara">
        <div className="mx-10 relative">
          <img
            src="https://www.antaranews.com/img/antaranews.com.png"
            alt=""
            className="mb-10 w-2xs md:ml-10 md:b-10"
          />
          <Slider {...settings}>
            {antara.map((list) => (
              <div className="flex justify-center items-center ml-5 mr-5 flex-col relative">
                <img
                  src={list.thumbnail}
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
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Antara;
