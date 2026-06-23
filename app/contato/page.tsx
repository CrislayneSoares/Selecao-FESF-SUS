import { Mensagem } from "@/src/components/Mensagem";
import { Footer } from "@/src/components/Footer";
import { RedesSociais } from "@/src/components/RedesSociais";

export default function Contato() {
    return (
        <main className="flex flex-col flex-1 items-center justify-center p-16 gap-4 bg-contato">

            <Mensagem></Mensagem>
            <h1>Redes Sociais</h1>
            <RedesSociais redesSociais={[
                { nome: "GitHub", url: "https://github.com/CrislayneSoares", icone: "/icons/github.png" },
                { nome: "LinkedIn", url: "https://www.linkedin.com/in/crislayne-ramos-520101200/", icone: "/icons/linkedin.png" },
                { nome: "Instagram", url: "https://www.instagram.com/crislayne.ramos/", icone: "/icons/instagram.png" },
            ]}></RedesSociais>
            <Footer description="Crislayne Ramos" ano={2026} />
        </main>
        
    );
}