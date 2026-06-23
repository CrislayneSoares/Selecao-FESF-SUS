import { Projeto } from "@/src/data/projetos";
import Image from "next/image";

type ProjectCardsProps = {
    projeto: Projeto;
}

export function ProjectCards({ projeto }: ProjectCardsProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-4 bg-white rounded-lg shadow-md overflow-hidden p-4 border-4 border-rosa">
            <a href={projeto.githubUrl} target="_blank" rel="noopener noreferrer">
                <Image src={projeto.imagemUrl} alt={projeto.title} width={500} height={200} />
                <h1 className="text-lilas font-bold text-xl">{projeto.title}</h1>
                <p className="text-lilas text-medium">{projeto.description}</p>
                <p className="text-lilas text-sm">{projeto.techs.join(", ")}</p>
            </a>
        </div>
    );
}