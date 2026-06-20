import Image from "next/image";

type HeroProps = {
    nome: string;
    cargo: string;
    descricao: string;
    imagem: string;
    redesSociais: {
        nome: string;
        url: string;
        icone: React.ReactNode;
    }[];
}

export function Hero({ nome, cargo, descricao, imagem, redesSociais }: HeroProps) {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl font-bold">Olá, eu sou {nome}</h1>
            <p className="text-xl text-gray-400 mt-4">{descricao}</p>
            <Image src={imagem} alt={nome} width={100} height={100} className="rounded-full" />
            <div className="mt-8 flex gap-4">
                {redesSociais.map((rede) => (
                    <a key={rede.nome} href={rede.url} target="_blank" rel="noopener noreferrer" >
                        {rede.nome}
                    </a>
                ))}
            </div>
        </section>
    );
}