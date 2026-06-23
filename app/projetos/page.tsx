import { Header } from "@/src/components/Header";
import { projetos } from "@/src/data/projetos";
import { ProjectCards } from "@/src/components/ProjectCards";

export default function Projetos() {
    return (
        <div>
            <Header title="Projetos" description="" />
            <main className="flex flex-1 w-full flex-col items-center justify-center p-16 bg-background-projetos">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    {projetos.map((projetos) => (
                        <ProjectCards key={projetos.id} projeto={projetos} />
                    ))}
                </div>
            </main>
        </div>
    );
}