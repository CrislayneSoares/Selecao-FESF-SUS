import { Header } from "@/src/components/Header";
import { Hero } from "@/src/components/Hero";
import { Social } from "@/src/components/Social";
import { Footer } from "@/src/components/Footer";

export default function Sobre() {
    return (
        <div>
            <main>
                <Hero nome="Crislayne Ramos" cargo="Desenvolvedora Web" descricao="Estudante de programação | Desenvolvedora em formação" imagem="https://github.com/CrislayneSoares.png" redesSociais={[
                    { nome: "GitHub", url: "https://github.com/CrislayneSoares", icone: null },
                    { nome: "LinkedIn", url: "https://www.linkedin.com/in/crislayne-ramos-520101200/", icone: null },
                    { nome: "Instagram", url: "https://www.instagram.com/crislayne.ramos/", icone: null },
                ]} />
                <Social></Social>
            </main>
            <Footer description="Crislayne Ramos" ano={2026} />
        </div>
    );
}