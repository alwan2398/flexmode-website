import { Asterisk } from "lucide-react";
import React from "react";

export default function Tagline() {
  return (
    <section className="bg-white py-20">
      <div className="relative max-w-5xl mx-auto text-center">
        <div className="absolute hidden md:block size-20 bg-zinc-300 rounded-full left-80 -top-10 overflow-clip">
          <div
            className={`size-full bg-[url('/images/port-3.png')] bg-cover bg-top`}
          ></div>
        </div>
        <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight text-zinc-950 tracking-tight">
          Flexmode menghadirkan fashion modern <br /> yang dirancang untuk{" "}
          <div className="border w-fit inline-flex items-center border-zinc-600 rounded-full pr-4 pl-2 pb-1 mt-1">
            <Asterisk className="inline-flex" size={45} /> kenyamanan
          </div>
          , dan gaya sehari-hari dengan fokus pada kualitas, dan pengalaman
          belanja yang mudah.
        </h2>

        <div
          className="absolute overflow-clip size-20 hidden md:block bg-zinc-300 rounded-full
         left-2 -bottom-4"
        >
          <div
            className={`size-full bg-[url('/images/port-4.jpg')] bg-cover bg-top`}
          ></div>
        </div>

        <div
          className="absolute overflow-clip size-20 hidden md:block bg-zinc-300 rounded-full
         right-2 -bottom-4"
        >
          <div
            className={`size-full bg-[url('/images/port-5.jpg')] bg-cover bg-top`}
          ></div>
        </div>
      </div>
    </section>
  );
}
