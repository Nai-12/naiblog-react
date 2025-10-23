function About() {
  return (
    <div className="absolute top-[80rem] left-0 right-0 bottom-0" id="about">
      <div className="flex justify-around items-center flex-row-reverse">
        <div className=" text-start relative">
          <div className="flex justify-start items-start absolute -top-10 right-10 w-28">
            <p className="absolute text-[11px] -right-10 bg-[rgba(12_140_233)]/50 py-1 px-2.5 rounded-full gap-3 border-3 border-[#246fa4] md:text-[16px] xl:text-xs">
              Tentang Web ini
            </p>
          </div>
          <h1 className="font-extrabold text-2xl lg:text-4xl">
            Informasi <span className="text-[rgba(12_140_233)]">Website</span>{" "}
            Ini
          </h1>
        </div>
        <div className="relative hidden lg:block">
          <img src="/logo.webp" alt="" className="w-32 relative" />
        </div>
      </div>
      <div className="flex justify-start items-start flex-row-reverse py-10">
        <div className="flex justify-center items-center flex-col gap-10 xl:justify-end xl:items-end xl:mr-[15%]">
          <p className="w-[90%] text-center text-[10px] sm:text-sm xl:text-base xl:text-end xl:w-[50%]">
            Naiblog, adalah website yang digunakan untuk membaca berita dari
            berbagai website berita nasional, website ini diciptakan untuk
            memudahkan kalian membaca berita dari berbagai sumber dengan
            efisien, dengan begini kalian tak perlu pusing untuk mencari
            informasi satu persatu cukup satu website memberikan berbagai sumber
          </p>
          <p className="w-[90%] text-center text-[10px] sm:text-sm xl:text-base xl:text-end xl:w-[50%]">
            Website ini sendiri diciptakan pada tahun 2020 hanya untuk testing,
            dan website ini juga menggunakan script API dari{" "}
            <a
              href="https://github.com/renomureza/api-berita-indonesia"
              className="text-[#398eca] underline"
              target="__blank"
            >
              renomureza
            </a>{" "}
            yang kedepanya akan saya kembangkan sendiri, lalu pada tahun 2024
            website ini mulai saya buat untuk bisa di akses publik, siapa tau
            website ini memudahkan orang orang untuk membaca berita digital
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
