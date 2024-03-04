export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center lg:p-24">
      <img
        className="w-24 lg:w-28 pb-8"
        src="/images/dubinsko_logo.png"
        alt="logo"
      />
      <h1 className="text-4xl lg:text-5xl text-center leading-tight pb-10 lg:pb-6 text-[#3F2E8E] font-bold uppercase">
        Dubinsko Pranje
        <br />
        Nameštaja Paja
      </h1>
      <h2 className="text-3xl text-center font-bold text-[#F8AC2C] uppercase">
        Pogledajte cenovnik klikom na link dole
      </h2>
      <ul className="flex gap-5 justify-center items-center pt-10 lg:pt-8">
        <li>
          <a
            className="bg-gray-400 text-white rounded-lg p-3 text-xl text-semibold flex justify-center items-center flex-col"
            href="https://drive.google.com/file/d/1bkgn5sKhW6wZ_bNvCh18rYhc5rA9YfkA/view?usp=sharing"
            target="_blank"
          >
            <img
              className="w-16 pb-2"
              src="/images/serbian-flag.png"
              alt="serbian flag"
            />
            Cenovnik
          </a>
        </li>
        <li>
          <a
            className="bg-gray-400 text-white rounded-lg p-3 text-xl text-semibold flex justify-center items-center flex-col"
            href="https://drive.google.com/file/d/1vBaiXuMfY7ODdU15_2elc6kplaVjAFcg/view?usp=sharing"
            target="_blank"
          >
            <img
              className="w-16 pb-2"
              src="/images/russian-flag.png"
              alt="russian flag"
            />
            Прайс-лист
          </a>
        </li>
        <li>
          <a
            className="bg-gray-400 text-white rounded-lg p-3 text-xl text-semibold flex justify-center items-center flex-col"
            href="https://drive.google.com/file/d/1q146j2ahbxwSQ-ED0A7I2sYqXffJPewc/view?usp=sharing"
            target="_blank"
          >
            <img
              className="w-16 pb-2"
              src="/images/united-states-flag.png"
              alt="us flag"
            />
            Pricelist
          </a>
        </li>
      </ul>
    </main>
  )
}
