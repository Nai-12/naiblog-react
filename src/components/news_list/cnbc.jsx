import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../../lib/url";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css";

function Cnbc() {
  const [cnbc, setCnbc] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const api = await axios.get(`${url()}cnbc/terbaru/`);
        const response = await api.data;
        setCnbc(response.data.posts);
      } catch (e) {
        console.log("Terdapat Error : " + e);
      }
    })();
  }, [cnbc]);
  return (
    <div className="slider-container">
      <div className="absolute top-[50rem] left-7 right-7" id="antara">
        <div className="mx-10">
          <img
            src="https://cdn.cnbcindonesia.com/cnbc/images/cnbc-logo.svg?v=6.5.3"
            alt=""
            className="mb-10 ml-12 mr-12 md:ml-10 md:b-10"
          />
          <Swiper
            modules={[Navigation, A11y]}
            pagination={{ clickable: true }}
            navigation
            slidesPerView={4}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {cnbc.map((list) => (
              <SwiperSlide>
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Cnbc;
