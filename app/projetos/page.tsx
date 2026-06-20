import { Footer } from "@/src/components/Footer";
import { Header } from "@/src/components/Header";
import { projetos } from "@/src/data/projetos";
import { ProjectCards } from "@/src/components/ProjectCards";

export default function Projetos() {
    return (
        <div>
            <Header title="Projetos" description="Projetos" />
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projetos.map((projetos) => (
                        <ProjectCards key={projetos.id} projeto={projetos} />
                    ))}
                </div>
            </main>
            <Footer description="Crislayne Ramos" ano={2026} />
        </div>
    );
}