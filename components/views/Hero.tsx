import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="bg-white py-40">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-4">
        <div className="flex flex-col space-y-4">
          <div className="bg-zinc-950 h-[400px] flex flex-col justify-between p-8 rounded-3xl shadow-sm">
            <h2 className="lg:text-6xl md:text-4xl text-3xl uppercase font-secondary font-bold text-white shadow-sm">
              UNTUK{" "}
              <img
                src="/arrow.svg"
                alt="arrow"
                className="w-40 ml-4 md:inline-block hidden"
              />{" "}
              <br /> SEMUA <br /> NAMUN <br /> BUKAN SIAPA PUN
            </h2>
            <p className="text-zinc-300">
              Kami menjalin hubungan personal dengan pelanggan, memastikan
              setiap orang terverifikasi untuk pengalaman berbelanja bebas
              stres.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-[230px] bg-zinc-300 rounded-3xl flex items-end p-3 overflow-clip">
              <div className="absolute inset-0 bg-[url('/images/port-1.jpg')] bg-cover bg-top"></div>
              <span className="bg-zinc-900/70 backdrop-blur-sm text-white font-semibold tracking-wide z-20 px-2 py-1 rounded-full">
                Gaya Baru
              </span>
            </div>
            <div className="relative h-[230px] bg-zinc-500 rounded-3xl flex items-end p-3 overflow-clip">
              <div className="absolute inset-0 bg-[url('/images/port-2.jpg')] bg-cover bg-top"></div>
              <span className="bg-zinc-900/70 backdrop-blur-sm text-white font-semibold tracking-wide z-20 px-2 py-1 rounded-full">
                Untuk Semua
              </span>
            </div>
          </div>
        </div>

        <div className=""></div>
        <Button className="md:hidden w-full rounded-full p-4">
          Belanja Sekarang
        </Button>
      </div>
    </section>
  );
}
