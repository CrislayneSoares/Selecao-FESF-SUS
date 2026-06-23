"use client";

import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-fundo bg-cover bg-no-repeat bg-center font-sans">
      <Header title="Crislayne Ramos" description="Desenvolvedora Web" />
      <main className="flex flex-1 max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <h1 className="font-bold text-2xl">DESENVOLVEDORA EM FORMAÇÃO</h1>
        <div className="relative w-[350px] h-[350px]">
          <div className="absolute inset-0 z-0 animate-float-y ">
            <Image src={"/zeppelin.png"} alt="Zeppelin" width={350} height={350} priority className="-scale-x-100"></Image>
          </div>
          <div className="absolute bottom-4 z-10 flex justify-center animate-float-x pointer-events-none w-[500px] right-0">
            <Image src={"/nuvens-brancas.png"} alt="Nuvens Brancas" width={500} height={200} className="h-auto w-full max-w-none"></Image>
          </div>
        </div>
      </main>
      <Footer description="Crislayne Ramos" ano={2026} />
    </div>
  );
}
