import { Projeto } from "@/src/data/projetos";
import Image from "next/image";

type ProjectCardsProps = {
    projeto: Projeto;
}

export function ProjectCards({ projeto }: ProjectCardsProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <a href={projeto.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden">
                <p className="text-gray-600 dark:text-gray-400">{projeto.title}</p>
                <p>{projeto.description}</p>
                <p>{projeto.techs.join(", ")}</p>
            </a>
        </div>
    );
}