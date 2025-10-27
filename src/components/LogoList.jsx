export function Logolist() {
  const dataImg = [
    { id: "1", url: "https://www.antaranews.com/img/antaranews.com.png" },
    {
      id: "2",
      url: "https://cdn.cnbcindonesia.com/cnbc/images/cnbc-logo.svg?v=6.5.3",
    },
    { id: "3", url: "/cnn.webp" },
    { id: "4", url: "https://www.jpnn.com/assets/img/logojpnncom.png" },
    {
      id: "5",
      url: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_320/v1634025439/01j4nspx8xdnx8gxs2fxd1s4sg.png",
    },
    { id: "6", url: "/merdeka.webp" },
    {
      id: "7",
      url: "https://cdn.okezone.com/underwood/revamp/2024/revamp/desktop/img/logo-baru-wp.png",
    },
    { id: "8", url: "https://static.republika.co.id/files/images/logo.png" },
    { id: "9", url: "/Tempo Magazine.webp" },
    {
      id: "10",
      url: "https://az.sindonews.net/wp/2025/d/assets_public/images/logo-sindonews.svg",
    },
    {
      id: "11",
      url: "https://assets.suara.com/suara/desktop/images/logo.svg",
    },
    {
      id: "12",
      url: "https://asset-1.tstatic.net/img/logo/tribun/png/tribunnews.png",
    },
  ];

  return (
    <div className="absolute top-360 md:top-400 lg:top-520" id="newsList">
      <div className="flex justify-center items-center mb-10">
        <div className="w-80 text-center relative">
          <div className="flex justify-center items-center">
            <p className="absolute text-[11px] -top-12 bg-[rgba(12_140_233)]/50 py-1 px-2.5 rounded-full gap-3 border-3 border-[#246fa4] md:text-[16px] xl:text-[14px]">
              Terima Kasih Kepada
            </p>
          </div>
          <h1 className="font-bold text-3xl mb-6 lg:text-4xl">
            Penyedia <span className="text-[rgba(12_140_233)]">Berita</span>
          </h1>
          <hr className="w-44 ml-[70px] text-[#398eca]" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex mx-20 py-8 rounded-2xl justify-center items-center flex-wrap gap-10 lg:flex lg:max-w-[80%]">
          {dataImg.map((list) => (
            <img
              src={list.url}
              className="w-5/13 md:w-3/12 lg:w-2/12"
              alt=""
              key={list.id}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
