import Image from "next/image";

type HeroProps = {
    nome: string;
    cargo: string;
    descricao: string;
    imagem: string;
}

export function Hero({ nome, cargo, descricao, imagem }: HeroProps) {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl font-bold">Olá, eu sou {nome}</h1>
            <p className="text-xl text-gray-400 mt-4">{descricao}</p>
            <Image src={imagem} alt={nome} width={100} height={100} className="rounded-full" />
        </section>
    );
}