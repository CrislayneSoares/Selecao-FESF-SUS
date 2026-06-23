"use client";

import { RedesSociais } from "@/src/components/RedesSociais";
import { Card } from "@/src/components/card";
import { Header } from "@/src/components/Header";

import Image from "next/image";

export default function Sobre() {
    return (
        <div>
            <Header title="Sobre" description="" />
            <main className="flex flex-col flex-1 items-center justify-center p-16 gap-4 bg-background-sobre">
                <h1 className="font-bold text-4xl text-lilas">Sobre Mim</h1>
                <section className="flex itens-center justify-center p-8 gap-4">
                    <Image src="https://github.com/CrislayneSoares.png" alt="Crislayne Ramos" width={160} height={50} className="rounded-full" />
                    <div className="flex flex-col gap-1">
                        <h2 className="font-bold text-xl text-rosa">Meu Nome</h2>
                        <p className="text-medium text-lilas">Crislayne Soares Ramos</p>
                        <h2 className="font-bold text-xl text-rosa">Email</h2>
                        <p className="text-medium text-lilas">crissoares346@gmail.com</p>
                        <h2 className="font-bold text-xl text-rosa">Redes Sociais</h2>
                        <RedesSociais redesSociais={[
                            { nome: "GitHub", url: "https://github.com/CrislayneSoares", icone: "/icons/github.png" },
                            { nome: "LinkedIn", url: "https://www.linkedin.com/in/crislayne-ramos-520101200/", icone: "/icons/linkedin.png" },
                            { nome: "Instagram", url: "https://www.instagram.com/crislayne.ramos/", icone: "/icons/instagram.png" },
                        ]}></RedesSociais>
                    </div>
                </section>
                <p className="text-medium text-lilas w-2/4">Desenvolvedora Web em formação, com conhecimentos em HTML5, CSS3, JavaScript, React/Next.js, Python, Arduino, MySQL e Figma. Sou uma pessoa organizada e curiosa, sempre disposta a aprender!</p>
                <h2 className="font-bold text-2xl text-lilas">Minhas Habilidades</h2>
                <ul className="flex flex-wrap items-center justify-center gap-4 w-2/8">
                    <li className="flex items-center gap-2 bg-white rounded-md p-2 text-lilas w-34"> <Image src="/icons/html.png" alt="HTML5" width={20} height={20} /> HTML5</li>
                    <li className="flex items-center gap-2 bg-white rounded-md p-2 text-lilas w-34"> <Image src="/icons/css.png" alt="CSS3" width={20} height={20} /> CSS3</li>
                    <li className="flex items-center gap-2 bg-white rounded-md p-2 text-lilas w-34"> <Image src="/icons/git.svg" alt="Git" width={20} height={20} /> Git</li>
                    <li className="flex items-center gap-2 bg-white rounded-md p-2 text-lilas w-34"> <Image src="/icons/github.png" alt="GitHub" width={20} height={20} /> GitHub</li>
                    <li className="flex items-center gap-2 bg-white rounded-md p-2 text-lilas w-34"> <Image src="/icons/figma.svg" alt="Figma" width={20} height={20} /> Figma</li>
                    <li className="flex items-center gap-2 bg-white rounded-md p-2 text-lilas w-34"> <Image src="/icons/tailwindcss.png" alt="TailwindCSS" width={20} height={20} /> TailwindCSS</li>
                    <li className="flex items-center gap-2 bg-white rounded-md p-2 text-lilas w-34"> <Image src="/icons/js.png" alt="JavaScript" width={20} height={20} /> JavaScript</li>
                    <li className="flex items-center gap-2 bg-white rounded-md p-2 text-lilas w-34"> <Image src="/icons/react.png" alt="React" width={20} height={20} /> React</li>
                    <li className="flex items-center gap-2 bg-white rounded-md p-2 text-lilas w-34"> <Image src="/icons/angular.png" alt="Angular" width={20} height={20} /> Angular</li>
                    <li className="flex items-center gap-2 bg-white rounded-md p-2 text-lilas w-34"> <Image src="/icons/python.png" alt="Python" width={20} height={20} /> Python</li>
                </ul>
                <h2 className="font-bold text-2xl text-lilas">Estudos</h2>
                <div className="flex flex-wrap items-center justify-center gap-4 w-2/4">
                    <Card title="Técnico em Informática" periodo="SET/2021 - JUL/2023" imagem="/icons/ceep.png"></Card>
                    <Card title="Git e GitHub" periodo="AGO/2023" imagem="/icons/dio.png"></Card>
                    <Card title="Programador de Sistemas" periodo="2022" imagem="https://github.com/CrislayneSoares.png"></Card>
                    <Card title="ADS - Uniasselvi" periodo="JAN/2025 - JUL/2027" imagem="https://github.com/CrislayneSoares.png"></Card>
                    <Card title="VNW - Vai Na Web" periodo="2026" imagem="https://github.com/CrislayneSoares.png"></Card>
                    <Card title="VNW - Vai Na Web" periodo="2026" imagem="https://github.com/CrislayneSoares.png"></Card>
                </div>
            </main>
        </div>
    );
}