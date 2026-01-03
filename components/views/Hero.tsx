"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowDown, Mail } from "lucide-react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    x.set((clientX - centerX) / 20);
    y.set((clientY - centerY) / 20);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <section className="bg-white pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col space-y-4">
          <div className="bg-zinc-950 h-[400px] flex flex-col justify-between p-8 rounded-3xl shadow-sm">
            <h2 className="lg:text-6xl text-4xl uppercase font-secondary font-bold text-white shadow-sm">
              UNTUK{" "}
              <img
                src="/arrow.svg"
                alt="arrow"
                className="w-40 ml-4 md:inline-block hidden"
              />{" "}
              <br /> GAYA <br /> FLEKSIBEL <br /> SEHARI-HARI
            </h2>
            <p className="text-zinc-300">
              Kami mengkurasi fashion modern yang nyaman, relevan, dan mudah
              dipadukan untuk aktivitas harian Anda.
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

        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative hidden lg:inline-flex bg-zinc-300 rounded-3xl overflow-hidden h-full min-h-[600px]"
        >
          <div className="w-full h-full flex items-center justify-center text-zinc-500">
            <Image
              src="/images/image-placeholder.jpg"
              alt="hero"
              fill
              className="object-cover"
            />
          </div>
          <motion.div
            style={{ x: springX, y: springY }}
            className="absolute bottom-80 right-44 size-16 flex items-center justify-center bg-zinc-800/60 backdrop-blur-lg text-zinc-50 uppercase rounded-full border-zinc-100 text-sm"
          >
            UP TO
            <br /> 50%
          </motion.div>

          <div className="absolute bottom-4 right-4 flex space-x-3">
            <Link
              href={"/"}
              className="group bg-white/90 backdrop-blur-xs cursor-pointer flex items-center gap-10 text-zinc-950 text-xs uppercase pl-3 pr-2 py-1 rounded-full hover:text-zinc-50 hover:bg-zinc-950 transition-all duration-200 ease-in font-semibold"
            >
              Koleksi Kami
              <span className="size-8 bg-zinc-800 group-hover:bg-zinc-100 rounded-full flex items-center justify-center">
                <ArrowDown className="text-zinc-50 group-hover:text-zinc-800" />
              </span>
            </Link>
            <Link
              href={"/"}
              className="border border-zinc-50 group backdrop-blur-xs bg-zinc-100/80 cursor-pointer flex items-center gap-10 text-zinc-950 hover:bg-zinc-950 text-xs uppercase pl-3 pr-2 py-1 rounded-full hover:text-zinc-50 transition-all duration-200 ease-in font-semibold"
            >
              Subscribe
              <span className="size-8 bg-zinc-50 rounded-full flex items-center justify-center">
                <Mail className="text-zinc-800 w-5" />
              </span>
            </Link>
          </div>
        </div>

        <Button
          size={"lg"}
          className="md:hidden w-full rounded-full p-4 cursor-pointer"
        >
          Koleksi Kami
        </Button>
      </div>
    </section>
  );
}
